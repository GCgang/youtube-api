import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Vidieos from "../pages/Vidieos/Vidieos";
import VidieoDetail from "../pages/VidieoDetail/VidieoDetail";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Vidieos />,
      },
      {
        path: ":vidieoId",
        element: <VidieoDetail />,
      },
    ],
  },
]);
