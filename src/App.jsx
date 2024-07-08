import Header from "../src/components/Header/Header";
import { Outlet } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export default function App() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}
