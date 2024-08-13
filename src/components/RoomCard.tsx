import {
  faBellConcierge,
  faHotTubPerson,
  faMugHot,
  faStar,
  faStarHalfStroke,
  faTv,
  faUser,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./ui/button";

export default function RoomCard() {
  return (
    <article className="flex flex-col bg-white text-font rounded-xl lg:w-[48%] 3xl:w-[30%]">
      <img
        className="h-[368px] rounded-t-xl"
        src="https://picsum.photos/200/300"
        alt="Imagem do quarto"
      />
      <div className="flex flex-col p-4 lg:p-6 gap-4">
        <h2 className="text-primary text-2xl font-semibold">Suíte Master</h2>
        <div className="flex justify-between items-start gap-8">
          <div className="flex flex-col xl:flex-row  gap-4">
            <div className="flex gap-4">
              <FontAwesomeIcon className="w-6 h-6" icon={faStar} />
              <FontAwesomeIcon className="w-6 h-6" icon={faStar} />
              <FontAwesomeIcon className="w-6 h-6" icon={faStar} />
              <FontAwesomeIcon className="w-6 h-6" icon={faStar} />
              <FontAwesomeIcon className="w-6 h-6" icon={faStarHalfStroke} />
            </div>
            <span className="text-font-light">160 Comentários</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon className="w-5 h-6 text-primary" icon={faUser} />
            <span className="text-primary text-2xl font-semibold">x3</span>
          </div>
        </div>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing nunc sagittis lorem
          tincidunt, vulputate ligula at, fermentum arcu.
        </p>
        <div className="flex gap-4 mb-4">
          <FontAwesomeIcon className="w-9 h-6 text-secondary" icon={faWifi} />
          <FontAwesomeIcon
            className="w-9 h-6 text-secondary"
            icon={faBellConcierge}
          />
          <FontAwesomeIcon className="w-9 h-6 text-secondary" icon={faMugHot} />
          <FontAwesomeIcon className="w-9 h-6 text-secondary" icon={faTv} />
          <FontAwesomeIcon
            className="w-9 h-6 text-secondary"
            icon={faHotTubPerson}
          />
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-2">
            <p className="text-font-light">Diária a partir de</p>
            <span className="text-primary font-semibold text-3xl">
              R$ 160,00
            </span>
          </div>
          <Button>Reservar</Button>
        </div>
      </div>
    </article>
  );
}
