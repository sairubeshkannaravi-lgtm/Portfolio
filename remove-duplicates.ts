import Database from 'better-sqlite3';

// Connect to the SQLite database
const sqlite = new Database('portfolio-dev.db');

try {
  // Find duplicate projects based on title
  const findDuplicatesQuery = `
    SELECT id, title, description, tech, link, repo_link, image_url,
           ROW_NUMBER() OVER (PARTITION BY title ORDER BY id) as row_num
    FROM projects
  `;
  
  const rows: any[] = sqlite.prepare(findDuplicatesQuery).all();
  
  // Identify duplicate IDs (those with row_num > 1)
  const duplicateIds = rows
    .filter(row => row.row_num > 1)
    .map(row => row.id);
  
  // Also check for projects with similar titles containing the same core concept
  const titles = rows.filter(row => row.row_num === 1).map(row => row.title.toLowerCase());
  const similarTitleIds = [];
  
  // Check for traffic flow projects that are similar
  const trafficProjects: any[] = rows.filter(row => 
    row.title.toLowerCase().includes('traffic') && 
    row.title.toLowerCase().includes('prediction')
  ).sort((a, b) => a.title.length - b.title.length); // Sort by title length, shorter first
  
  // Keep only the shortest title for traffic projects
  for (let i = 1; i < trafficProjects.length; i++) {
    similarTitleIds.push(trafficProjects[i].id);
  }
  
  // Combine duplicate IDs and similar title IDs
  const allIdsToRemove = [...new Set([...duplicateIds, ...similarTitleIds])];
  
  if (allIdsToRemove.length > 0) {
    console.log(`Found ${allIdsToRemove.length} projects to remove (duplicates and similar):`);
    allIdsToRemove.forEach(id => {
      const project = rows.find(row => row.id === id);
      console.log(`  - ID ${id}: "${project?.title}"`);
    });
    
    // Remove duplicates
    const deleteQuery = `DELETE FROM projects WHERE id IN (${allIdsToRemove.join(',')})`;
    const result = sqlite.prepare(deleteQuery).run();
    
    console.log(`\nSuccessfully removed ${result.changes} duplicate/similar projects.`);
  } else {
    console.log('No duplicate projects found.');
  }
  
  // Verify the cleanup
  const countQuery = `SELECT COUNT(*) as count FROM projects`;
  const countResult: any = sqlite.prepare(countQuery).get();
  console.log(`Total projects remaining: ${countResult.count}`);
  
} catch (error) {
  console.error('Error removing duplicates:', error);
} finally {
  sqlite.close();
}