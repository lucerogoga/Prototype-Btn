import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="title">PROMART ES COOL</h1>
      <div className="App">
        <button className="boton1">Agregar Empresa</button>
        <button className="boton2">Agregar Empresa</button>
        <button className="boton3">Agregar Empresa</button>
      </div>
      <h1 className="prueba1">Agregar Empresa</h1>
      <h2 className="prueba2">Agregar Empresa</h2>
      <h3 className="prueba3">Agregar Empresa</h3>
      <h4 className="prueba4">Agregar Empresa</h4>
      <p className="prueba5">Agregar Empresa</p>
    </div>
  );
}

export default App;
