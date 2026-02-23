import { useQuery } from "@tanstack/react-query";
import { experience as staticExperience } from "@/data/static-data";

export function useExperience() {
  return useQuery({
    queryKey: ['experience'],
    queryFn: async () => {
      return staticExperience;
    },
  });
}
