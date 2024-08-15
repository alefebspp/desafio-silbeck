import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import FaIcon from "./FaIcon";
import ReviewStars from "./ReviewStars";
import { Room } from "@/types";
import useCart from "@/hooks/useCart";
import { useToast } from "./ui/use-toast";

type Props = {
  room: Room;
};

export default function RoomCard({ room }: Props) {
  const { toast } = useToast();

  const { book } = useCart();

  function handleBooking(room: Room) {
    book(room);
    toast({
      title: "Adicionado com Sucesso",
      description:
        "O produto escolhido foi adicionado ao carrinho de reservas!",
      icon: "fa-solid fa-circle-check",
      iconClassname: "text-[#52C41A]",
    });
  }

  return (
    <article className="flex flex-col bg-white text-font rounded-xl lg:w-[calc(48%-1rem)] 3xl:w-[calc(33%-2rem)]">
      <img
        className="h-[368px] rounded-t-xl"
        src={room.img}
        alt="Imagem do quarto"
      />
      <div className="flex flex-col p-4 lg:p-6 gap-4">
        <h2 className="text-primary text-2xl font-semibold">{room.nome}</h2>
        <div className="flex justify-between items-start gap-8">
          <div className="flex flex-col xl:flex-row  gap-4">
            <ReviewStars rating={room.avaliacao.nota} />
            <span className="text-font-light">
              {room.avaliacao.quantidade} Comentários
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaIcon className="w-5 h-6 text-primary" icon="fa-solid fa-user" />
            <span className="text-primary text-2xl font-semibold">
              x{room.hospedes}
            </span>
          </div>
        </div>
        <div className="card-text mt-4">
          <p className="text-lg">{room.descricao}</p>
        </div>
        <div className="flex items-center gap-4 mb-4">
          {room.caracteristicas.map((item) => (
            <FaIcon
              key={item.id}
              className="w-6 h-6 text-secondary"
              icon={item.icone}
            />
          ))}
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-2">
            <p className="text-font-light">Diária a partir de</p>
            <span className="text-primary font-semibold text-3xl">
              {Math.round(room.preco).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <Button onClick={() => handleBooking(room)}>Reservar</Button>
        </div>
      </div>
    </article>
  );
}

export function RoomCardSkeleton() {
  return (
    <article className="w-full flex flex-col bg-white rounded-xl lg:w-[48%] 3xl:w-[calc(33%-2rem)]">
      <Skeleton className="h-[368px] rounded-t-xl rounded-b-none" />
      <div className="flex flex-col p-4 lg:p-6 gap-4">
        <Skeleton className="w-28 h-6" />
        <div className="flex justify-between items-start gap-8">
          <div className="flex flex-col xl:flex-row gap-4 mb-4">
            <div className="flex gap-4">
              <Skeleton className="w-6 h-6 rounded-full" />
              <Skeleton className="w-6 h-6 rounded-full" />
              <Skeleton className="w-6 h-6 rounded-full" />
              <Skeleton className="w-6 h-6 rounded-full" />
              <Skeleton className="w-6 h-6 rounded-full" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Skeleton className="w-4/5 h-6" />
          <Skeleton className="w-4/5 h-6" />
          <Skeleton className="w-4/5 h-6" />
        </div>
        <div className="flex gap-4 mb-4">
          <Skeleton className="w-9 h-9 rounded-full" />
          <Skeleton className="w-9 h-9 rounded-full" />
          <Skeleton className="w-9 h-9 rounded-full" />
          <Skeleton className="w-9 h-9 rounded-full" />
          <Skeleton className="w-9 h-9 rounded-full" />
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-2">
            <Skeleton className="w-16 h-6" />
            <Skeleton className="w-20 h-6" />
          </div>
          <Skeleton className="w-24 h-14" />
        </div>
      </div>
    </article>
  );
}
