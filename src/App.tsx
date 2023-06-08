import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import useWindowsDimensions from "./hooks/use-window-dimentions";

function App() {
  const [count, setCount] = useState(0);
  const { isMobile } = useWindowsDimensions();
  return (
    <div className="container">
      <div className="subContainer">
        {isMobile ? (
          <h1 className="title">PROMART MOBILE</h1>
        ) : (
          <h1 className="title">PROMART DESKTOP</h1>
        )}
        <h1 className="title">BOTONES</h1>
        <div className="App">
          <button className="boton1">Agregar Empresa</button>
          <button className="boton2">Agregar Empresa</button>
          <button className="boton3">Agregar Empresa</button>
        </div>
        <h1 className="title">TITULOS</h1>
        <h1 className="title1">Agregar Empresa</h1>
        <h2 className="title2">Agregar Empresa</h2>
        <h3 className="title3">Agregar Empresa</h3>
        <h4 className="title4">Agregar Empresa</h4>
        <h1 className="title">PARRAFOS</h1>
        <p className="parrafo1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          explicabo debitis sunt adipisci? Odit quam cumque laudantium totam?
          Dolores explicabo excepturi voluptatum dolore! Saepe qui autem esse
          maiores sint alias.
        </p>
        <h1 className="title">CARD</h1>
        <div className="flex flex-col self-stretch transition-shadow duration-300 hover:shadow-product-card bg-white rounded-md w-64">
          <figure className="flex flex-1 lg:flex-col">
            {/* FIGURA */}
            <div className="relative w-1/2 lg:w-full">
              <div className="relative after:content-[''] after:block ">
                <img
                  className="rounded-t-md block object-contain w-64"
                  src="https://media.promart.pe/img_optim/131378.jpg"
                />
              </div>

              <div className="absolute left-2 top-2 flex flex-col items-start gap-2 w-fit">
                {/* TAG */}
                <span className="px-1.5 py-0.5 rounded-b-md rounded-tr-md text-center font-staffXX text-white bg-blue-700 text-xl lg:text-2xl !leading-none">
                  EXCLUSIVO WEB
                </span>
                {/* DEWSCUENTO */}
                <span className=" px-2 pt-0.5 bg-yellow leading-none rounded-b-md rounded-tr-md   text-sm md:text-base lg:text-2xl text-center font-staffXX text-black">
                  -15%
                </span>
              </div>
            </div>
            {/* DETALLE DEL PROFUCTO */}
            <div className="px-3 pt-3 font-roboto flex gap-1 flex-col flex-1">
              <span className="flex justify-between">
                <p className="text-xxs md:text-xs lg:text-sm text-start text-black">
                  ORANGE
                </p>
                <p className="text-xxs md:text-xs lg:text-sm text-end text-black">
                  SKU: 345T5
                </p>
              </span>
              <span className="lg:flex-1 lg:flex lg:items-center">
                <p
                  title="CEMENTO"
                  className="text-sm lg:text-lg font-bold !leading-tight line-clamp-2 text-black"
                >
                  CEMENTO
                </p>
              </span>
              <div className="flex-1 lg:flex-none" />
              <div className="flex items-end gap-2 font-staffXX font-bold">
                <span className="leading-4">
                  <p className="text-gray-160 line-through">S/34.00</p>
                  <p className="text-3xl lg:text-4xl text-black">S/45.00</p>
                </span>
                <span className="text-center text-orange bg-orange-50 w-max px-1 py-0.5 rounded-md mb-2 leading-none">
                  AHORRAS: 1.00
                </span>
              </div>
            </div>
          </figure>

          {/* <ProductFooter {...props} carroucelSwiper={carroucelSwiper} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
