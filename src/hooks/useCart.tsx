import { useRoomsContext } from "@/contexts/roomsContext";
import { Room } from "@/types";

export default function useCart() {
  const { state, dispatch } = useRoomsContext();

  function book(room: Room) {
    const targetRoom = room.id;
    const roomAlreadyAdded = state.rooms.find(
      ({ room }) => targetRoom === room.id
    );

    if (roomAlreadyAdded) {
      return;
    }

    dispatch({
      type: "SET_ROOMS",
      payload: [...state.rooms, { room, quantity: 1 }],
    });
    window.localStorage.setItem(
      "rooms",
      JSON.stringify([...state.rooms, { room, quantity: 1 }])
    );
  }

  function addRoomQuantity(id: number) {
    const targetRoom = state.rooms.find(({ room }) => id === room.id);

    const roomWithAddedQuantity = state.rooms.map((item) => {
      if (item.room.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    if (targetRoom) {
      dispatch({ type: "SET_ROOMS", payload: roomWithAddedQuantity });
      window.localStorage.setItem(
        "rooms",
        JSON.stringify(roomWithAddedQuantity)
      );
    }
  }

  function removeRoomQuantity(id: number) {
    const targetRoom = state.rooms.find(({ room }) => id === room.id);
    const roomWithRemovedQuantity = state.rooms.map((item) => {
      if (item.room.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });

    if (targetRoom) {
      if (targetRoom.quantity === 1) {
        return removeRoom(id);
      }

      dispatch({ type: "SET_ROOMS", payload: roomWithRemovedQuantity });
      window.localStorage.setItem(
        "rooms",
        JSON.stringify(roomWithRemovedQuantity)
      );
    }
  }

  function removeRoom(id: number) {
    const filteredRooms = state.rooms.filter(({ room }) => room.id !== id);
    dispatch({ type: "SET_ROOMS", payload: filteredRooms });
    window.localStorage.setItem("rooms", JSON.stringify(filteredRooms));
  }

  return {
    book,
    rooms: state.rooms,
    removeRoom,
    addRoomQuantity,
    removeRoomQuantity,
  };
}
