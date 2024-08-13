import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { DatePicker } from "./DatePicker";

export default function SearchBar() {
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
              <DatePicker />
            </div>
            <div className="flex flex-col gap-1 lg:w-[calc(50%-0.5rem)] lg:max-w-64 3xl:min-w-64">
              <label htmlFor="">Saída</label>
              <DatePicker />
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
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1 lg:w-[calc(50%-0.5rem)] lg:max-w-64 3xl:min-w-64">
              <label htmlFor="">Crianças</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <Button
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
