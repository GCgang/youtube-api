import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Vidieos from "../pages/Vidieos/Vidieos";
import VidieoDetail from "../pages/VidieoDetail/VidieoDetail";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Vidieos />,
      },
      {
        path: "vidieo/:id",
        element: <VidieoDetail />,
      },
    ],
  },
]);
