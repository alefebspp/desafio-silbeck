import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./App.css";
import Footer from "./components/Footer";
import RoomCard from "./components/RoomCard";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <main className="p-6 lg:p-12">
        <div className="max-w-[1920px] mx-auto">
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
      </main>
      <Footer />
    </>
  );
}

export default App;
