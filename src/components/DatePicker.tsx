import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import FaIcon from "./FaIcon";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type Props = {
  onSelect: (date?: Date) => void;
  date?: Date;
  startsAt?: Date | null;
};

export function DatePicker({ onSelect, date, startsAt }: Props) {
  function getDisabledDates() {
    if (startsAt) {
      return [{ before: startsAt }];
    }
    if (startsAt === null) {
      return [{ before: new Date() }, { after: new Date() }, new Date()];
    }
    return [{ before: new Date() }];
  }
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "!w-full !px-3 justify-between font-normal text-graphite text-sm 3xl:text-base"
          )}
        >
          {date ? (
            format(date, "dd/MM/yyyy")
          ) : (
            <span className="text-font-light">Selecione uma data</span>
          )}
          <FaIcon
            className="h-6 w-6 text-font-light"
            icon="fa-regular fa-calendar"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          locale={ptBR}
          mode="single"
          selected={date}
          onSelect={(date) => onSelect(date)}
          initialFocus
          disabled={getDisabledDates()}
        />
      </PopoverContent>
    </Popover>
  );
}
