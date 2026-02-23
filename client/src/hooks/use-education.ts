import { useQuery } from "@tanstack/react-query";
import { education as staticEducation } from "@/data/static-data";

export function useEducation() {
  return useQuery({
    queryKey: ['education'],
    queryFn: async () => {
      return staticEducation;
    },
  });
}
