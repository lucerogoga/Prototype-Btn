import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button className="boton1">Agregar Empresa</button>
      <button className="boton2">Agregar Empresa</button>
      <button className="boton3">Agregar Empresa</button>
    </div>
  );
}

export default App;
