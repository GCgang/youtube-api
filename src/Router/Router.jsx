import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Videos from "../pages/Videos/Videos";
import VideoDetail from "../pages/VideoDetail/VideoDetail";
import NotFound from "../pages/NotFound/NotFound";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Videos /> },
      { path: "/videos", element: <Videos /> },
      { path: "/videos/:keyword", element: <Videos /> },
      { path: "videos/watch/:id", element: <VideoDetail /> },
    ],
  },
]);
