import sunLogo from "../assets/sun-logo.svg";
import Button from "../components/ui/Button";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import ministerioLogo from "../assets/ministerio.png";
import Calendar from "react-calendar";
import { useState } from "react";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
import "react-calendar/dist/Calendar.css";

//TODO: Refactor code and create components, change calendar component
const Home = () => {
  console.log("Jeje");
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="w-full h-full flex flex-col justify-center p-3">
      <section className="flex flex-col items-center gap-5 h-1/2 pt-4">
        <img src={sunLogo} width={150} alt="sun" />
        <h1 className="text-center">
          Bienvenido al Sistema. Hoy día 20/08/2022
        </h1>
      </section>
      <section className="px-2 w-full h-1/2">
        <div className="flex bg-[#D9D9D9] w-full h-full p-4 gap-3">
          <div className="w-1/4 bg-white h-full rounded-lg"></div>
          <div className="w-2/4 flex flex-col justify-between gap-4 bg-white h-full rounded-lg p-2.5">
            <h5 className="underline font-bold">Noticias escolares</h5>
            <div className="h-4/5 flex gap-2 flex-col">
              <div className="flex items-center h-full w-full gap-2">
                <img src={leftArrow} width={20} alt="left arrow" />
                <div className="flex items-center h-full w-full bg-gray-300 p-4 gap-5 rounded-md">
                  <img
                    className="w-[70px] rounded-full bg-white aspect-square"
                    src={ministerioLogo}
                    alt="ministerio"
                  />
                  <div className="flex flex-col text-center gap-3 w-full bg-blue-400 py-4 px-1 rounded-lg">
                    <h6>Ministerio de educación convoca maestros a clases.</h6>
                    <p>
                      <i>Listín Diario</i>
                    </p>
                  </div>
                </div>
                <img src={rightArrow} width={20} alt="right arrow" />
              </div>
              <h6 className="text-right text-[0.8rem]">
                Powered by Google News
              </h6>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 justify-center w-1/4 h-full rounded-lg gap-3">
            <div className="flex justify-center flex-col items-center border-[1px] border-solid border-black w-full h-full bg-white shadow-md rounded-lg p-1 gap-2">
              <h4>Gráficos</h4>
              <Button>Click Aquí</Button>
            </div>
            <div className="flex justify-center flex-col items-center border-[1px] border-solid border-black w-full h-full bg-white shadow-md rounded-lg p-1 gap-2">
              <h4>Datos</h4>
              <Button>Click Aquí</Button>
            </div>
            <div className="flex justify-center flex-col items-center border-[1px] border-solid border-black w-full h-full bg-white shadow-md rounded-lg p-1 gap-2">
              <h4>Maestros</h4>
              <Button>Click Aquí</Button>
            </div>
            <div className="flex justify-center flex-col items-center border-[1px] border-solid border-black w-full h-full bg-white shadow-md rounded-lg p-1 gap-2">
              <h4>Alumnos</h4>
              <Button>Click Aquí</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
