import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DefaultAvatarIcon from "./icons/DefaultAvatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

export default function Reviews() {
  return (
    <div className="flex flex-col mt-24 pb-16">
      <h1 className="text-primary font-semibold text-4xl mb-8">Avaliações</h1>
      <Carousel
        opts={{
          slidesToScroll: 1,
          breakpoints: {
            "(min-width: 1024px)": { slidesToScroll: 2 },
          },
        }}
        className="w-[90%] mx-auto"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem className="lg:basis-1/2" key={index}>
              <div className="flex gap-4 text-font">
                <DefaultAvatarIcon className="hidden md:block w-[128px] h-[129px]" />
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <DefaultAvatarIcon className="w-16 h-16 md:hidden" />
                    <h2 className="text-2xl font-semibold text-graphite">
                      Rafael
                    </h2>
                  </div>
                  <p className="text-lg">
                    Conforto, atenção dos funcionários, cuidados deles conosco
                    em pequenos detalhes.
                  </p>
                  <div className="flex justify-between">
                    <span className="text-font-light text-lg">
                      Janeiro 2023
                    </span>
                    <div className="flex gap-4">
                      <FontAwesomeIcon className="w-6 h-6" icon={faStar} />
                      <FontAwesomeIcon className="w-6 h-6" icon={faStar} />
                      <FontAwesomeIcon className="w-6 h-6" icon={faStar} />
                      <FontAwesomeIcon className="w-6 h-6" icon={faStar} />
                      <FontAwesomeIcon
                        className="w-6 h-6"
                        icon={faStarHalfStroke}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
