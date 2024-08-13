import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartFlatbedSuitcase,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="px-6 lg:px-12 max-h-[128px] h-[128px]">
      <div className="max-w-[1920px] relative top-1/2 -translate-y-1/2 flex justify-between items-center mx-auto">
        <a href="/">
          <Logo className="w-28 h-20 lg:w-44 text-graphite" />
        </a>
        <div className="hidden lg:flex gap-6 items-center text-graphite">
          <a href="#menu">Menu</a>
          <a href="#menu">Quartos</a>
          <a href="#menu">Avaliações</a>
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex gap-2 items-center text-graphite">
            <span>BRL</span>
            <FontAwesomeIcon className="w-3 h-3" icon={faChevronDown} />
          </div>

          <a
            className="relative w-6 h-6 lg:w-fit lg:rounded-md lg:gap-2 lg:py-5 p-4 rounded-full flex items-center justify-center border-2 border-primary text-primary"
            href="/pagamento"
          >
            <div className="absolute bg-red-500 rounded-full w-4 h-4 flex items-center justify-center -top-2 -right-2">
              <span className="text-sm text-white">1</span>
            </div>
            <FontAwesomeIcon
              className=" fill-current"
              icon={faCartFlatbedSuitcase}
            />
            <p className="hidden lg:block font-medium">Reservas</p>
          </a>
        </div>
      </div>
    </header>
  );
}
