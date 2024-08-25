import { format } from "date-fns";
import useCart from "@/hooks/useCart";
import { Room } from "@/types";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./ui/button";
import { useRoomsContext } from "@/contexts/roomsContext";

type Props = {
  room: Room;
  quantity: number;
};

export default function BookingCard({ room, quantity }: Props) {
  const { state } = useRoomsContext();
  const { removeRoom, addRoomQuantity, removeRoomQuantity } = useCart();
  const shouldShowRange = state.startDate && state.endDate;
  const shouldShowStart = state.startDate && !state.endDate;

  return (
    <div className="py-6 flex justify-between border-b border-font-light/20">
      <div className="flex flex-col gap-4 text-sm">
        <h2 className="text-lg font-semibold">{room.nome}</h2>
        <p>Diárias: 2</p>
        {!shouldShowRange && !shouldShowStart && <p>Estadia: a definir</p>}
        {shouldShowStart && (
          <p>
            Estadia: {format(state.startDate || "", "dd/MM/yyyy")} - a definir
          </p>
        )}
        {shouldShowRange && (
          <p>
            Estadia: {format(state.startDate || "", "dd/MM/yyyy")} -{" "}
            {format(state.endDate || "", "dd/MM/yyyy")}
          </p>
        )}
        <p>Qtde Hóspedes: {room.hospedes}</p>
      </div>
      <div className="flex flex-col gap-4 items-end">
        <span className="text-lg font-semibold w-fit">
          {Math.round(quantity * room.preco).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <div className="h-10 px-4 mb-8 text-lg text-font border border-graphite rounded-lg flex gap-4 justify-center items-center">
          <button type="button" className="appearance-none outline-none">
            <FontAwesomeIcon
              onClick={() => removeRoomQuantity(room.id)}
              icon={faMinus}
            />
          </button>
          <span className="font-semibold">{quantity}</span>
          <button type="button" className="appearance-none outline-none">
            <FontAwesomeIcon
              onClick={() => addRoomQuantity(room.id)}
              icon={faPlus}
            />
          </button>
        </div>
        <Button
          onClick={() => removeRoom(room.id)}
          className="bg-white hover:bg-white py-0 px-0 flex gap-2 items-center text-red-500 w-fit"
        >
          <FontAwesomeIcon icon={faTrash} />
          <span>Excluir</span>
        </Button>
      </div>
    </div>
  );
}
