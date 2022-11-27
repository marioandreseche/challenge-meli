import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import DetalleProducto from "./page/Detalle-producto";
import Resultado from "./page/Resultado";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/items" element={<Resultado />} exact />
        <Route path="/items/:id" element={<DetalleProducto />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
