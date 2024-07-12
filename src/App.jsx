import SearchHeader from "../src/components/SearchHeader/SearchHeader";
import { Outlet } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export default function App() {
  return (
    <>
      <SearchHeader />
      <Outlet />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}
