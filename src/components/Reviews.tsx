import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Review, { ReviewSkeleton } from "./Review";
import useTestimonyQueries from "@/hooks/useTestimonyQueries";

export default function Reviews() {
  const { getTestimonials } = useTestimonyQueries();

  const { isLoading, data } = getTestimonials();

  return (
    <div id="avaliacoes" className="flex flex-col mt-24 pb-16">
      <h1 className="text-primary font-semibold text-4xl mb-8">Avaliações</h1>
      {isLoading ? (
        <div className="w-[90%] mx-auto flex lg:justify-between">
          <ReviewSkeleton />
          <ReviewSkeleton className="hidden lg:flex" />
        </div>
      ) : (
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
            {data?.map((testimony) => (
              <CarouselItem className="lg:basis-1/2" key={testimony.id}>
                <Review testimony={testimony} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </div>
  );
}
