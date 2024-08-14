import { useRoomsContext } from "@/contexts/roomsContext";
import { Room } from "@/types";

export default function useCart() {
  const { rooms, setRooms } = useRoomsContext();

  function book(room: Room) {
    const targetRoom = room.id;
    const roomAlreadyAdded = rooms.find(({ room }) => targetRoom === room.id);

    if (roomAlreadyAdded) {
      return;
    }

    setRooms((prev) => [...prev, { room, quantity: 1 }]);
    window.localStorage.setItem(
      "rooms",
      JSON.stringify([...rooms, { room, quantity: 1 }])
    );
  }

  function addRoomQuantity(id: number) {
    const targetRoom = rooms.find(({ room }) => id === room.id);

    if (targetRoom) {
      setRooms((prev) =>
        prev.map((item) => {
          if (item.room.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        })
      );
      window.localStorage.setItem(
        "rooms",
        JSON.stringify(
          rooms.map((item) => {
            if (item.room.id === id) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }
            return item;
          })
        )
      );
    }
  }

  function removeRoomQuantity(id: number) {
    const targetRoom = rooms.find(({ room }) => id === room.id);

    if (targetRoom) {
      if (targetRoom.quantity === 1) {
        return removeRoom(id);
      }

      setRooms((prev) =>
        prev.map((item) => {
          if (item.room.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        })
      );
      window.localStorage.setItem(
        "rooms",
        JSON.stringify(
          rooms.map((item) => {
            if (item.room.id === id) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            }
            return item;
          })
        )
      );
    }
  }

  function removeRoom(id: number) {
    const filteredRooms = rooms.filter(({ room }) => room.id !== id);
    setRooms(filteredRooms);
    window.localStorage.setItem("rooms", JSON.stringify(filteredRooms));
  }

  return {
    book,
    rooms,
    removeRoom,
    addRoomQuantity,
    removeRoomQuantity,
  };
}
