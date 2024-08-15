import FaIcon from "./FaIcon";
import { buttonVariants } from "./ui/button";

export default function EmptyCart() {
  return (
    <div className="w-full min-h-[20vh] flex flex-col items-center justify-center gap-4">
      <FaIcon
        className="text-primary w-12 h-12"
        icon="fa-solid fa-cart-shopping"
      />
      <h2>Carrinho Vazio..</h2>

      <a
        href="/"
        className={buttonVariants({
          variant: "default",
          className: "w-full lg:w-1/2",
        })}
      >
        Adicionar quartos
      </a>
    </div>
  );
}
