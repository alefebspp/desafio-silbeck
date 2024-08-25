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
  const { state, dispatch } = useRoomsContext();

  function onStartDateSelect(date?: Date) {
    dispatch({ type: "SET_START_DATE", payload: date });
  }

  function onEndDateSelect(date?: Date) {
    dispatch({ type: "SET_END_DATE", payload: date });
  }

  function onAdultsValueChange(value: string) {
    dispatch({ type: "SET_ADULTS", payload: parseInt(value) });
  }

  function onChildrenValueChange(value: string) {
    dispatch({ type: "SET_CHILDREN", payload: parseInt(value) });
  }

  function handleSearchRequest() {
    if (state.startDate) {
      window.localStorage.setItem(
        "startDate",
        format(state.startDate, "yyyy-MM-dd")
      );
    }
    if (state.endDate) {
      window.localStorage.setItem(
        "endDate",
        format(state.endDate, "yyyy-MM-dd")
      );
    }
    if (state.adults) {
      window.localStorage.setItem("adults", state.adults.toString());
    }
    if (state.children) {
      window.localStorage.setItem("children", state.children.toString());
    }
    dispatch({ type: "SET_SHOULD_REFETCH_ROOMS", payload: true });
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
              <DatePicker date={state.startDate} onSelect={onStartDateSelect} />
            </div>
            <div className="flex flex-col gap-1 lg:w-[calc(50%-0.5rem)] lg:max-w-64 3xl:min-w-64">
              <label htmlFor="">Saída</label>
              <DatePicker
                date={state.endDate}
                onSelect={onEndDateSelect}
                startsAt={state.startDate ? state.startDate : null}
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
                value={state.adults?.toString()}
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
                value={state.children?.toString()}
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
