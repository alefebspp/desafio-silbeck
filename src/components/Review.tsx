import DefaultAvatarIcon from "./icons/DefaultAvatar";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";
import { Testimony } from "@/types";
import ReviewStars from "./ReviewStars";

type Props = {
  testimony: Testimony;
};

export default function Review({ testimony }: Props) {
  const reviewDate = new Date(testimony.data);

  const monthName = reviewDate.toLocaleString("pt-BR", { month: "long" });

  return (
    <div className="flex gap-4 text-font h-full">
      <DefaultAvatarIcon className="hidden md:block min-w-[128px] h-[129px]" />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <DefaultAvatarIcon className="w-16 h-16 md:hidden" />
          <h2 className="text-2xl font-semibold text-graphite">
            {testimony.autor}
          </h2>
        </div>
        <p className="text-lg card-text md:w-full">{testimony.descricao}</p>
        <div className="flex justify-between mt-auto">
          <span className="text-font-light text-lg">
            {`${monthName.charAt(0).toLocaleUpperCase()}${monthName.substring(
              1
            )}`}{" "}
            {reviewDate.getFullYear()}
          </span>
          <ReviewStars rating={testimony.nota} />
        </div>
      </div>
    </div>
  );
}

export function ReviewSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-4 w-full lg:w-[45%]", className)}>
      <Skeleton className="hidden md:block w-[128px] h-[100px] rounded-full" />
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center gap-4">
          <Skeleton className="w-16 h-16 rounded-full md:hidden" />
          <Skeleton className="w-24 h-6" />
        </div>
        <div className="flex flex-col gap-4">
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-1/5 h-6" />
        </div>
        <div className="w-full flex justify-between">
          <Skeleton className="w-28 h-6" />
          <div className="flex gap-4">
            <Skeleton className="w-6 h-6 rounded-full" />
            <Skeleton className="w-6 h-6 rounded-full" />
            <Skeleton className="w-6 h-6 rounded-full" />
            <Skeleton className="w-6 h-6 rounded-full" />
            <Skeleton className="w-6 h-6 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
