import { useQuery } from "@tanstack/react-query";
import { getHotelInfo } from "@/services/hotel";

export default function useHotelQueries() {
  function getHotel() {
    const query = useQuery({
      queryKey: ["hotel"],
      queryFn: getHotelInfo,
    });

    return query;
  }

  return {
    getHotel,
  };
}
