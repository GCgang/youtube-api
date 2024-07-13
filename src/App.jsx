import SearchHeader from "../src/components/SearchHeader/SearchHeader";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { YoutubeProvider } from "./context/YoutubeApiContext";
const queryClient = new QueryClient();
export default function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </YoutubeProvider>
    </>
  );
}
