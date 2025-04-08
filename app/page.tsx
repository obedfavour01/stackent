"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";

export default function Home() {

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>


      <div className="flex relative">
        <div className="basis-2/12 ">
          <Sidebar />
        </div>

        <div className="basis-10/12">
          <MainContent />
        </div>
      </div>
    </QueryClientProvider> 
  );
}
