import useRoomQueries from "@/hooks/useRoomQueries";
import RoomCard, { RoomCardSkeleton } from "./RoomCard";
import { useEffect } from "react";
import { useRoomsContext } from "@/contexts/roomsContext";

export default function RoomsList() {
  const { shouldRefetchRooms, setShouldRefetchRooms } = useRoomsContext();
  const { getRooms } = useRoomQueries();

  const { isLoading, data, refetch, isRefetching } = getRooms();

  useEffect(() => {
    if (shouldRefetchRooms) {
      refetch();
      setShouldRefetchRooms(false);
    }
  }, [shouldRefetchRooms]);

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
