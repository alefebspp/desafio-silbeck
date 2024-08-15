import { getRooms as getRoomsRequest } from "@/services/rooms";
import { useQuery } from "@tanstack/react-query";

export default function useRoomQueries() {
  function getRooms() {
    const query = useQuery({
      queryKey: ["rooms"],
      queryFn: getRoomsRequest,
      refetchOnWindowFocus: false,
    });

    return query;
  }

  return {
    getRooms,
  };
}
