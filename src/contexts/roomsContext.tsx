import { parseISO, formatISO } from "date-fns";
import { RoomWithQuantity } from "@/types";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";

export interface RoomsState {
  rooms: RoomWithQuantity[];
  startDate: Date | undefined;
  endDate: Date | undefined;
  adults: number | undefined;
  children: number | undefined;
  shouldRefetchRooms: boolean;
}

type Action =
  | { type: "SET_ROOMS"; payload: RoomWithQuantity[] }
  | { type: "SET_START_DATE"; payload: Date | undefined }
  | { type: "SET_END_DATE"; payload: Date | undefined }
  | { type: "SET_ADULTS"; payload: number | undefined }
  | { type: "SET_CHILDREN"; payload: number | undefined }
  | { type: "SET_SHOULD_REFETCH_ROOMS"; payload: boolean };

const initialState: RoomsState = {
  rooms: [],
  startDate: undefined,
  endDate: undefined,
  adults: undefined,
  children: undefined,
  shouldRefetchRooms: false,
};

function roomsReducer(state: RoomsState, action: Action): RoomsState {
  switch (action.type) {
    case "SET_ROOMS":
      return { ...state, rooms: action.payload };
    case "SET_START_DATE":
      return { ...state, startDate: action.payload };
    case "SET_END_DATE":
      return { ...state, endDate: action.payload };
    case "SET_ADULTS":
      return { ...state, adults: action.payload };
    case "SET_CHILDREN":
      return { ...state, children: action.payload };
    case "SET_SHOULD_REFETCH_ROOMS":
      return { ...state, shouldRefetchRooms: action.payload };
    default:
      return state;
  }
}

export interface RoomsContextProps {
  state: RoomsState;
  dispatch: React.Dispatch<Action>;
}

interface RoomsContextProviderProps {
  children: ReactNode;
}

const RoomsContext = createContext<RoomsContextProps>({} as RoomsContextProps);

export const RoomsContextProvider: FC<RoomsContextProviderProps> = (props) => {
  const [state, dispatch] = useReducer(roomsReducer, initialState);

  useEffect(() => {
    const storageRooms = window.localStorage.getItem("rooms") ?? "";
    const savedStartDate = window.localStorage.getItem("startDate");
    const savedEndDate = window.localStorage.getItem("endDate");
    const savedAdults = window.localStorage.getItem("adults");
    const savedChildren = window.localStorage.getItem("children");

    if (savedStartDate) {
      const date = parseISO(savedStartDate);
      const utcDate = formatISO(date, { representation: "complete" });
      dispatch({ type: "SET_START_DATE", payload: new Date(utcDate) });
    }
    if (savedEndDate) {
      const date = parseISO(savedEndDate);
      const utcDate = formatISO(date, { representation: "complete" });
      dispatch({ type: "SET_END_DATE", payload: new Date(utcDate) });
    }
    if (savedAdults) {
      dispatch({ type: "SET_ADULTS", payload: parseInt(savedAdults) });
    }
    if (savedChildren) {
      dispatch({ type: "SET_CHILDREN", payload: parseInt(savedChildren) });
    }

    if (storageRooms) {
      try {
        const parsedRooms: RoomWithQuantity[] = JSON.parse(storageRooms);
        if (parsedRooms?.length > 0) {
          dispatch({ type: "SET_ROOMS", payload: parsedRooms });
        }
      } catch (error) {
        console.error("Error parsing rooms from localStorage:", error);
      }
    }
  }, []);

  return (
    <RoomsContext.Provider
      value={{
        state,
        dispatch,
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
