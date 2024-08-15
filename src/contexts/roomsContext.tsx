import { parseISO, formatISO } from "date-fns";
import { RoomWithQuantity } from "@/types";
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
  useContext,
  useEffect,
} from "react";

export interface RoomsContextProps {
  rooms: RoomWithQuantity[];
  setRooms: Dispatch<SetStateAction<RoomWithQuantity[]>>;
  startDate: Date | undefined;
  setStartDate: Dispatch<SetStateAction<Date | undefined>>;
  endDate: Date | undefined;
  setEndDate: Dispatch<SetStateAction<Date | undefined>>;
  adults: number | undefined;
  setAdults: Dispatch<SetStateAction<number | undefined>>;
  children: number | undefined;
  setChildren: Dispatch<SetStateAction<number | undefined>>;
  shouldRefetchRooms: boolean;
  setShouldRefetchRooms: Dispatch<SetStateAction<boolean>>;
}

interface RoomsContextProviderProps {
  children: ReactNode;
}

const RoomsContext = createContext<RoomsContextProps>({} as RoomsContextProps);

export const RoomsContextProvider: FC<RoomsContextProviderProps> = (props) => {
  const [rooms, setRooms] = useState<RoomWithQuantity[]>([]);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [adults, setAdults] = useState<number>();
  const [children, setChildren] = useState<number>();
  const [shouldRefetchRooms, setShouldRefetchRooms] = useState(false);

  useEffect(() => {
    const storageRooms = window.localStorage.getItem("rooms") ?? "";
    const savedStartDate = window.localStorage.getItem("startDate");
    const savedEndDate = window.localStorage.getItem("endDate");
    const savedAdults = window.localStorage.getItem("adults");
    const savedChildren = window.localStorage.getItem("children");

    if (savedStartDate) {
      const date = parseISO(savedStartDate);
      const utcDate = formatISO(date, { representation: "complete" });

      setStartDate(new Date(utcDate));
    }
    if (savedEndDate) {
      const date = parseISO(savedEndDate);
      const utcDate = formatISO(date, { representation: "complete" });

      setEndDate(new Date(utcDate));
    }
    if (savedAdults) {
      setAdults(parseInt(savedAdults));
    }
    if (savedChildren) {
      setChildren(parseInt(savedChildren));
    }

    if (storageRooms) {
      try {
        const parsedRooms: RoomWithQuantity[] = JSON.parse(storageRooms);
        if (parsedRooms?.length > 0) {
          setRooms(parsedRooms);
        }
      } catch (error) {
        console.error("Error parsing rooms from localStorage:", error);
      }
    }
  }, []);

  return (
    <RoomsContext.Provider
      value={{
        rooms,
        setRooms,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        adults,
        setAdults,
        children,
        setChildren,
        shouldRefetchRooms,
        setShouldRefetchRooms,
      }}
    >
      {props.children}
    </RoomsContext.Provider>
  );
};

export default RoomsContext;

export const useRoomsContext = (): RoomsContextProps => {
  const context = useContext(RoomsContext);

  if (!context) {
    throw new Error(
      "useRoomsContext must be used within an RoomsContextProvider"
    );
  }

  return context;
};
