import "./App.css";
import "./assets/sass/app.style.scss";
import TheHome from "./components/TheHome.jsx";
import NavBar from "./components/Navbar.jsx";
import ListTecnologies from "./components/ListTecnologies.jsx";
import Contact from "./components/Contact.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<TheHome />} />
          <Route path="/listtecnologies" element={<ListTecnologies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
