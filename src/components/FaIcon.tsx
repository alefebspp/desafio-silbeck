import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  icon: string;
  className?: string;
};

export default function FaIcon({ icon, className }: Props) {
  return <FontAwesomeIcon icon={icon as IconProp} className={className} />;
}
