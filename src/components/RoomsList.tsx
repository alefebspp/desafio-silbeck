import useRoomQueries from "@/hooks/useRoomQueries";
import RoomCard, { RoomCardSkeleton } from "./RoomCard";

export default function RoomsList() {
  const { getRooms } = useRoomQueries();

  const { isLoading, data } = getRooms();

  if (isLoading) {
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
