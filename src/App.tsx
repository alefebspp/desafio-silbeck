import { RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import router from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { RoomsContextProvider } from "./contexts/roomsContext";

const queryClient = new QueryClient();

function App() {
  return (
    <RoomsContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </RoomsContextProvider>
  );
}

export default App;
