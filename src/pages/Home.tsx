import Reviews from "@/components/Reviews";
import RoomCard from "@/components/RoomCard";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  return (
    <>
      <SearchBar />
      <div className="max-w-[1920px] mx-auto p-6 lg:p-12">
        <h1 className="text-primary font-semibold text-4xl">Quartos</h1>
        <p className="text-font mt-2 text-2xl">
          Todos os nossos tipos de quartos incluem café da manhã
        </p>
        <div className="flex flex-wrap justify-between gap-8 mt-8">
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
        <Reviews />
      </div>
    </>
  );
}
