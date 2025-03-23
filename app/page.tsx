import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <div className="basis-2/12">
        <Sidebar />
      </div>

      <div className="basis-10/12">
        <MainContent />
      </div>
    </div>
  );
}
