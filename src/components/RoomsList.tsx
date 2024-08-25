import useRoomQueries from "@/hooks/useRoomQueries";
import RoomCard, { RoomCardSkeleton } from "./RoomCard";
import { useEffect } from "react";
import { useRoomsContext } from "@/contexts/roomsContext";

export default function RoomsList() {
  const { state, dispatch } = useRoomsContext();
  const { getRooms } = useRoomQueries();

  const { isLoading, data, refetch, isRefetching } = getRooms();

  useEffect(() => {
    if (state.shouldRefetchRooms) {
      refetch();
      dispatch({ type: "SET_SHOULD_REFETCH_ROOMS", payload: false });
    }
  }, [state.shouldRefetchRooms]);

  if (isLoading || isRefetching) {
    return (
      <div className="flex flex-wrap gap-12 mt-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <RoomCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-12 mt-8">
      {data?.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
}
