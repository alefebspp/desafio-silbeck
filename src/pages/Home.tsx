import Reviews from "@/components/Reviews";
import RoomsList from "@/components/RoomsList";
import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  return (
    <>
      <SearchBar />
      <div id="quartos" className="max-w-[1920px] mx-auto p-6 lg:p-12">
        <h1 className="text-primary font-semibold text-4xl">Quartos</h1>
        <p className="text-font mt-2 text-2xl">
          Todos os nossos tipos de quartos incluem café da manhã
        </p>
        <RoomsList />
        <Reviews />
      </div>
    </>
  );
}
