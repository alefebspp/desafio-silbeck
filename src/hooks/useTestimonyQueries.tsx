import { useQuery } from "@tanstack/react-query";
import { getTestimonials as getTestimonialsRequest } from "@/services/testimonials";

export default function useTestimonyQueries() {
  function getTestimonials() {
    const query = useQuery({
      queryKey: ["testimonials"],
      queryFn: getTestimonialsRequest,
      refetchOnWindowFocus: false,
    });

    return query;
  }

  return {
    getTestimonials,
  };
}
