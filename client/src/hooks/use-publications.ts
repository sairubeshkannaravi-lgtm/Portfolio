import { useQuery } from "@tanstack/react-query";
import { publications as staticPublications } from "@/data/static-data";

export function usePublications() {
  return useQuery({
    queryKey: ['publications'],
    queryFn: async () => {
      return staticPublications;
    },
  });
}
