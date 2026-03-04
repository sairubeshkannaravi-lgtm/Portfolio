import { useMutation } from "@tanstack/react-query";
import { insertMessageSchema, type InsertMessage } from "@/lib/schema";
import { useToast } from "@/hooks/use-toast";

export function useCreateMessage() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      const validated = insertMessageSchema.parse(data);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Just return simulated success
      return { success: true, ...validated };
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  });
}
