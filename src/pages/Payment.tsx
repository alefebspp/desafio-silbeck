import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  faCheck,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PaymentPage() {
  return (
    <form className="max-w-[1920px] mx-auto flex flex-col xl:flex-row xl:p-12 xl:px-20 xl:gap-12">
      <div className="flex flex-col gap-4 text-font text-lg p-6 lg:p-12 lg:px-20 xl:p-0 xl:w-1/2">
        <h1 className="text-2xl font-semibold text-graphite">Identificação</h1>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Nome</label>
          <Input />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">E-mail</label>
          <Input />
        </div>
        <hr className="w-full bg-font-light/20 h-[1px] my-4" />
        <h1 className="text-2xl font-semibold text-graphite">Pagamento</h1>
        <div className="flex gap-4 items-center">
          <Input
            className="w-6 h-6"
            id="credit_card"
            value="credit_card"
            type="radio"
          />
          <label htmlFor="credit_card">Cartão de Crédito</label>
          <Input className="w-6 h-6" id="pix" value="pix" type="radio" />
          <label htmlFor="pix">PIX</label>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="card_name">Nome Cartão</label>
          <Input />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="card_number">Número Cartão</label>
          <Input placeholder="0000 0000 0000 0000" />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-1 w-[calc(50%-1rem)]">
            <label htmlFor="validity">Validade</label>
            <Input placeholder="00/00" />
          </div>
          <div className="flex flex-col gap-1 w-[calc(50%-1rem)]">
            <label htmlFor="cvc">CVC</label>
            <Input placeholder="000" />
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col p-6 lg:p-12 lg:px-20 xl:p-8 text-graphite xl:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Resumo da reserva</h1>

        <div className="flex flex-col">
          <div className="py-6 flex justify-between border-b border-font-light/20">
            <div className="flex flex-col gap-4 text-sm">
              <h2 className="text-lg font-semibold">Suíte Master</h2>
              <p>Diárias: 2</p>
              <p>Estadia: 08/12/2023 - 10/12/2023</p>
              <p>Qtde Hóspedes: 3</p>
            </div>
            <div className="flex flex-col gap-4 items-end">
              <span className="text-lg font-semibold w-fit">R$ 320,00</span>
              <div className="h-10 px-4 mb-8 text-lg text-font border border-graphite rounded-lg flex gap-4 justify-center items-center">
                <FontAwesomeIcon icon={faMinus} />
                <span className="font-semibold">2</span>{" "}
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div className="flex gap-2 items-center text-red-500 w-fit">
                <FontAwesomeIcon icon={faTrash} />
                <span>Excluir</span>
              </div>
            </div>
          </div>

          <div className="py-6 flex justify-between border-b border-font-light/20">
            <div className="flex flex-col gap-4 text-sm">
              <h2 className="text-lg font-semibold">Luxo Casal</h2>
              <p>Diárias: 4</p>
              <p>Estadia: 08/12/2023 - 10/12/2023</p>
              <p>Qtde Hóspedes: 3</p>
            </div>
            <div className="flex flex-col gap-4 items-end">
              <span className="text-lg font-semibold w-fit">R$ 480,00</span>
              <div className="h-10 px-4 mb-8 text-lg text-font border border-graphite rounded-lg flex gap-4 justify-center items-center">
                <FontAwesomeIcon icon={faMinus} />
                <span className="font-semibold">4</span>{" "}
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div className="flex gap-2 items-center text-red-500 w-fit">
                <FontAwesomeIcon icon={faTrash} />
                <span>Excluir</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 pt-6">
            <div className="flex justify-between text-graphite font-semibold text-lg">
              <h2>Valor Total</h2>
              <span>R$ 800,00</span>
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
              <Button variant="success" className="w-full lg:w-3/5 gap-2">
                <FontAwesomeIcon icon={faCheck} />
                Confirmar pagamento
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
