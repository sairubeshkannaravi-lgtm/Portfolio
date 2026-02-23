import { useQuery } from "@tanstack/react-query";
import { skills as staticSkills } from "@/data/static-data";

export function useSkills() {
  return useQuery({
    queryKey: ['skills'],
    queryFn: async () => {
      return staticSkills;
    },
  });
}
