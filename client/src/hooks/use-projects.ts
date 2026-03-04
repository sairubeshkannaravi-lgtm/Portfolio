import { useQuery } from "@tanstack/react-query";
import { projects as staticProjects } from "@/data/static-data";

export function useProjects() {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      // Return static data directly
      const uniqueProjects = staticProjects.filter((project, index, self) =>
        index === self.findIndex(p => p.title === project.title)
      );
      
      const filteredProjects = uniqueProjects.filter(project => 
        project.title !== "Data Analysis Dashboards"
      );
      
      return filteredProjects;
    },
    staleTime: Infinity,
  });
}
