import { useState } from "react";
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

export function DatePicker() {
  const [date, setDate] = useState<Date>();

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
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
