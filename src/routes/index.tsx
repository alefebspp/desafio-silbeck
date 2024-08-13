import { createBrowserRouter } from "react-router-dom";

import HomePage from "@/pages/Home";
import RootLayout from "@/layout";
import PaymentPage from "@/pages/Payment";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/pagamento",
        element: <PaymentPage />,
      },
    ],
  },
]);

export default router;
