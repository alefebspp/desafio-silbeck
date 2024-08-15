import FaIcon from "./FaIcon";

type Props = {
  rating: number;
};

export default function ReviewStars({ rating }: Props) {
  const roundedRating = Math.round(rating * 2) / 2;

  const fullStars = Math.floor(roundedRating);
  const hasHalfStar = roundedRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex gap-4">
      {Array.from({ length: fullStars }, (_, index) => (
        <FaIcon
          key={index}
          className="w-6 h-6 text-[#FFD540]"
          icon="fa-solid fa-star"
        />
      ))}
      {hasHalfStar && <HalfStar />}
      {Array.from({ length: emptyStars }, (_, index) => (
        <FaIcon
          key={index}
          className="w-6 h-6 text-font-light/10"
          icon="fa-solid fa-star"
        />
      ))}
    </div>
  );
}

function HalfStar() {
  return (
    <div className="flex relative">
      <FaIcon className="w-6 h-6 text-[#FFD540]" icon="fa-solid fa-star-half" />
      <FaIcon
        className="absolute w-6 h-6 text-font-light/10 transform scale-x-[-1]"
        icon="fa-solid fa-star-half"
      />
    </div>
  );
}
