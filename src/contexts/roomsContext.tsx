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
  startDate: string | undefined;
  setStartDate: Dispatch<SetStateAction<string | undefined>>;
  endDate: string | undefined;
  setEndDate: Dispatch<SetStateAction<string | undefined>>;
  adults: number | undefined;
  setAdults: Dispatch<SetStateAction<number | undefined>>;
  children: number | undefined;
  setChildren: Dispatch<SetStateAction<number | undefined>>;
}

interface RoomsContextProviderProps {
  children: ReactNode;
}

const RoomsContext = createContext<RoomsContextProps>({} as RoomsContextProps);

export const RoomsContextProvider: FC<RoomsContextProviderProps> = (props) => {
  const [rooms, setRooms] = useState<RoomWithQuantity[]>([]);
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const [adults, setAdults] = useState<number>();
  const [children, setChildren] = useState<number>();

  useEffect(() => {
    const storageRooms = window.localStorage.getItem("rooms") ?? "";

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
