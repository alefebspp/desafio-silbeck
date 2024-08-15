import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, buttonVariants } from "./ui/button";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useRoomsContext } from "@/contexts/roomsContext";
import BookingCard from "./BookingCard";
import EmptyCart from "./EmptyCart";

export default function BookingSummary() {
  const { rooms } = useRoomsContext();

  const cartIsEmpty = rooms.length == 0;

  const bookingTotal = rooms.reduce((acc, item) => {
    const roomPrice = item.room.preco;
    const roomQuantity = item.quantity;
    return acc + roomQuantity * roomPrice;
  }, 0);

  return (
    <div className="h-fit bg-white flex flex-col p-6 lg:p-12 lg:px-20 xl:p-8 text-graphite xl:w-1/2">
      {cartIsEmpty ? (
        <EmptyCart />
      ) : (
        <>
          <h1 className="text-2xl font-semibold mb-4">Resumo da reserva</h1>

          <div className="flex flex-col">
            {rooms.map(({ room, quantity }) => (
              <BookingCard key={room.id} quantity={quantity} room={room} />
            ))}
            <div className="flex flex-col gap-8 pt-6">
              <div className="flex justify-between text-graphite font-semibold text-lg">
                <h2>Valor Total</h2>
                <span>
                  {Math.round(bookingTotal).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>
              <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 ">
                <a
                  href="/"
                  className={buttonVariants({
                    variant: "outline",
                    className: "w-full lg:w-2/5",
                  })}
                >
                  Cancelar
                </a>
                <Button
                  type="submit"
                  variant="success"
                  className="w-full lg:w-3/5 gap-2"
                >
                  <FontAwesomeIcon icon={faCheck} />
                  Confirmar pagamento
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
