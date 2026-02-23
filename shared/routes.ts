import { z } from 'zod';
import { 
  insertProjectSchema, 
  insertSkillSchema, 
  insertExperienceSchema, 
  insertEducationSchema, 
  insertCertificationSchema, 
  insertPublicationSchema,
  insertMessageSchema
} from './schema';

export {
  insertProjectSchema, 
  insertSkillSchema, 
  insertExperienceSchema, 
  insertEducationSchema, 
  insertCertificationSchema, 
  insertPublicationSchema,
  insertMessageSchema
};

// API routes for static version (using dummy types)
export const api = {
  projects: {
    list: {
      method: 'GET' as const,
      path: '/api/projects' as const,
      responses: {
        200: z.array(z.unknown()),
      },
    }
  },
  skills: {
    list: {
      method: 'GET' as const,
      path: '/api/skills' as const,
      responses: {
        200: z.array(z.unknown()),
      },
    }
  },
  experience: {
    list: {
      method: 'GET' as const,
      path: '/api/experience' as const,
      responses: {
        200: z.array(z.unknown()),
      },
    }
  },
  education: {
    list: {
      method: 'GET' as const,
      path: '/api/education' as const,
      responses: {
        200: z.array(z.unknown()),
      },
    }
  },
  certifications: {
    list: {
      method: 'GET' as const,
      path: '/api/certifications' as const,
      responses: {
        200: z.array(z.unknown()),
      },
    }
  },
  publications: {
    list: {
      method: 'GET' as const,
      path: '/api/publications' as const,
      responses: {
        200: z.array(z.unknown()),
      },
    }
  },
  messages: {
    create: {
      method: 'POST' as const,
      path: '/api/messages' as const,
      input: insertMessageSchema,
      responses: {
        201: z.unknown(),
        400: z.object({ message: z.string() }),
      },
    }
  }
};