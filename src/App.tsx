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
        <div className="flex flex-col self-stretch transition-shadow duration-300 hover:shadow-product-card bg-white rounded-md h-30">
          <figure className="flex flex-1">
            {/* <ProductImage {...props} carroucelMode={carroucelMode} />
            <ProductDetail {...props} /> */}
          </figure>

          {/* <ProductFooter {...props} carroucelSwiper={carroucelSwiper} /> */}
        </div>
        <div className="h-32 w-4 bg-blue-300">zxsfxfs</div>
      </div>
    </div>
  );
}

export default App;
