import { useQuery } from "@tanstack/react-query";
import { certifications as staticCertifications } from "@/data/static-data";

export function useCertifications() {
  return useQuery({
    queryKey: ['certifications'],
    queryFn: async () => {
      return staticCertifications;
    },
  });
}
