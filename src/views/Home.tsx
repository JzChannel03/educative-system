import sunLogo from "../assets/sun-logo.svg";
import Button from "../components/ui/Button";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import ministerioLogo from "../assets/ministerio.png";

//TODO: Refactor code and create components, change calendar component
const Home = () => {
  console.log("Jeje");
  return (
    <div className="w-full flex flex-col justify-start landscape:pt-5 md:p-1 gap-1 overflow-hidden">
      <section className="flex flex-col justify-center items-center gap-4 h-2/6 text-center">
        <img src={sunLogo} className="w-[5rem]" alt="sun" />
        <h1 className="text-lg">Bienvenido al Sistema. Hoy día 20/08/2022</h1>
      </section>
      <section className="md:px-2 w-full h-4/6">
        <div className="flex bg-slate-200 md:bg-[#D9D9D9] w-full h-full p-4 gap-3 flex-col  md:flex-row overflow-scroll rounded-lg ">
          <div className="hidden md:block bg-white h-full w-full md:w-1/4 rounded-lg">
            <p>Jejeje</p>
          </div>
          <div className="w-full md:w-2/4 flex flex-col justify-start md:justify-between gap-1 p-2 bg-white h-[70vh] md:h-full rounded-lg text-center">
            <h5 className="font-bold">Noticias escolares</h5>
            <div className="h-4/5 flex gap-2 flex-col">
              <div className="flex flex-col md:flex-row items-center h-full w-full gap-2">
                <img
                  className="hidden md:block "
                  src={leftArrow}
                  width={20}
                  alt="left arrow"
                />
                <div className="flex flex-col md:flex-row items-center h-full w-full md:w-4/5 bg-gray-300 px-2 py-3 md:p-4 gap-5 rounded-md">
                  <img
                    className="w-[70px] rounded-full bg-white aspect-square p-1"
                    src={ministerioLogo}
                    alt="ministerio"
                  />
                  <div className="flex flex-col text-center gap-3 w-full bg-blue-400 py-4 px-1 rounded-lg">
                    <h6>Ministerio de educación convoca maestros a clases.</h6>
                    <p>
                      <i>Listín Diario</i>
                    </p>
                    <p className="md:hidden">...</p>
                  </div>
                </div>
                <img
                  className="hidden md:block "
                  src={rightArrow}
                  width={20}
                  alt="right arrow"
                />
              </div>
              <h6 className="md:text-right text-[0.8rem]">
                Powered by Google News
              </h6>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 justify-center w-full md:w-1/4 h-full md:h-full rounded-lg gap-3">
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
