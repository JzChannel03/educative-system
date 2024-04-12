import systemLogo from "./assets/system-logo.svg";
import Time from "./components/Time";
import { Outlet } from "react-router-dom";
import menuLogo from "./assets/menu.png";

const App = () => {
  return (
    <main className="grid h-[100vh] w-[100vw] grid-rows-[1fr_10fr]">
      <nav className="flex justify-between items-center px-3 border-b-2 border-blue-700 border-solid">
        <div className="w-2/3 flex items-center md:w-1/3">
          <img src={systemLogo} alt="" />
          <h4 className="font-bold">Puerto Rico</h4>
        </div>
        <div className="bg-slate-100 rounded-lg md:flex p-1 opacity-80 active:opacity-100 active:bg-slate-200 hover:opacity-100 hover:bg-slate-200 w-auto md:justify-center md:w-1/3 md:text-center text-right group">
          <img
            className="group-hover:-rotate-90 duration-500"
            src={menuLogo}
            width={20}
            alt=""
          />
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
