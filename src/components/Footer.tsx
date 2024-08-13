import Logo from "./Logo";
import FacebookIcon from "./icons/Facebook";
import InstagramIcon from "./icons/Instagram";
import TwitterIcon from "./icons/Twitter";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <footer className="bg-primary pb-6 px-6 lg:pt-12 lg:pb-14 lg:px-20 text-white">
      <div className="max-w-[1920px] mx-auto flex flex-col">
        <Logo className="w-28 h-20 lg:w-44 text-white" />
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <div className="flex flex-col md:flex-row md:justify-between xl:gap-20 2xl:gap-52">
            <address className="">
              Rua Bernardo Locks, 148 <br />
              Centro, Braço do Norte - Santa Catarina.
              <br />
              <a href="tel:4836587272">(48) 3658-7272</a> <br />
              <a href="mailto:suporte@silbeck.com.br">suporte@silbeck.com.br</a>
            </address>
            <div className="flex justify-between mt-8 md:mt-0 md:gap-20">
              <div className="flex flex-col">
                <h4 className="font-medium">Sobre nós</h4>
                <ul className="flex flex-col">
                  <li>Nossa História</li>
                  <li>Contato</li>
                  <li>Termos e Condições</li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h4 className="font-medium">Outros Serviços</h4>
                <ul className="flex flex-col">
                  <li>Passeios</li>
                  <li>Spa</li>
                  <li>Reserva Espaço</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-8 max-w-[444px] xl:mt-0">
            <p>Nos encontre nas redes sociais</p>
            <ul className="flex gap-4">
              <InstagramIcon />
              <FacebookIcon />
              <TwitterIcon />
            </ul>
            <p className="mt-4">
              Assine nossa newsletter, toda semana um conteúdo novo sobre o
              universo da hotelaria no seu email!
            </p>
            <div className="flex">
              <Input
                placeholder="e-mail"
                className="w-4/5 rounded-tr-none rounded-br-none"
              />
              <Button className="w-fit rounded-tl-none rounded-bl-none text-black bg-[#9BB5E8] hover:bg-[#9BB5E8]/90 font-light">
                Enviar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
