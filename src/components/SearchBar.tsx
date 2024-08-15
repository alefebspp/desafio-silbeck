import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { DatePicker } from "./DatePicker";
import { useRoomsContext } from "@/contexts/roomsContext";

export default function SearchBar() {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    adults,
    setAdults,
    children,
    setChildren,
    setShouldRefetchRooms,
  } = useRoomsContext();

  function onStartDateSelect(date?: Date) {
    setStartDate(date);
  }

  function onEndDateSelect(date?: Date) {
    setEndDate(date);
  }

  function onAdultsValueChange(value: string) {
    setAdults(parseInt(value));
  }

  function onChildrenValueChange(value: string) {
    setChildren(parseInt(value));
  }

  function handleSearchRequest() {
    if (startDate) {
      window.localStorage.setItem("startDate", format(startDate, "yyyy-MM-dd"));
    }
    if (endDate) {
      window.localStorage.setItem("endDate", format(endDate, "yyyy-MM-dd"));
    }
    if (adults) {
      window.localStorage.setItem("adults", adults.toString());
    }
    if (children) {
      window.localStorage.setItem("children", children.toString());
    }
    setShouldRefetchRooms(true);
  }

  return (
    <div className="py-4 px-6 lg:py-8 lg:px-12 bg-primary text-white">
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row lg:items-center lg:gap-4 3xl:justify-center">
        <div className="flex flex-col gap-2 lg:w-[45%] 3xl:flex-row 3xl:items-center 3xl:gap-6 lg:max-w-[720px]">
          <label className="text-xl 4xl:text-2xl font-medium" htmlFor="">
            Data Estadia
          </label>
          <div className="flex flex-col lg:flex-row lg:gap-4 3xl:gap-8">
            <div className="flex flex-col gap-1 lg:w-[calc(50%-0.5rem)] lg:max-w-64 3xl:min-w-64">
              <label htmlFor="">Entrada</label>
              <DatePicker date={startDate} onSelect={onStartDateSelect} />
            </div>
            <div className="flex flex-col gap-1 lg:w-[calc(50%-0.5rem)] lg:max-w-64 3xl:min-w-64">
              <label htmlFor="">Saída</label>
              <DatePicker
                date={endDate}
                onSelect={onEndDateSelect}
                startsAt={startDate ? startDate : null}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4 lg:mt-0 lg:w-[45%] 3xl:flex-row 3xl:items-center 3xl:gap-6 lg:max-w-[720px]">
          <label className="text-xl 4xl:text-2xl font-medium" htmlFor="">
            Hóspedes
          </label>
          <div className="flex flex-col lg:flex-row lg:gap-4 3xl:gap-8">
            <div className="flex flex-col gap-1 lg:w-[calc(50%-0.5rem)] lg:max-w-64 3xl:min-w-64">
              <label htmlFor="">Adultos</label>
              <Select
                value={adults?.toString()}
                onValueChange={(value) => onAdultsValueChange(value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1 lg:w-[calc(50%-0.5rem)] lg:max-w-64 3xl:min-w-64">
              <label htmlFor="">Crianças</label>
              <Select
                value={children?.toString()}
                onValueChange={(value) => onChildrenValueChange(value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <Button
          onClick={handleSearchRequest}
          type="button"
          variant="secondary"
          className="mt-8 flex gap-2 lg:mt-auto xl:w-[10%]"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <span className="lg:hidden xl:block">Pesquisar</span>
        </Button>
      </div>
    </div>
  );
}
