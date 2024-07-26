import "./App.css";
import "./assets/sass/app.style.scss";
import TheHome from "./components/TheHome.jsx";
import NavBar from "./components/Navbar.jsx";
import Catalog from "./components/Catalog.jsx";
import Reserve from "./components/Reserve.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<TheHome />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
