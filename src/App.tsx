import TraditionalLink from "./components/ui/CustomLink";
import systemLogo from "./assets/system-logo.svg";
import Time from "./components/Time";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <main className="grid h-[100vh] w-[100vw] grid-rows-[1fr_10fr]">
      <nav className="flex justify-between items-center px-3 border-b-2 border-blue-700 border-solid">
        <div className="w-2/3 flex items-center md:w-1/3">
          <img src={systemLogo} alt="" />
          <h4 className="font-bold">Puerto Rico</h4>
        </div>
        <div className="w-1/3 md:w-1/3 md:text-center text-right">
          <TraditionalLink to={"#"}>Inicio</TraditionalLink>
        </div>
        <div className="hidden md:w-1/3 md:block">
          <Time />
        </div>
      </nav>
      <Outlet />
    </main>
  );
};

export default App;
