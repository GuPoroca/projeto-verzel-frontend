import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/PaginaLogin";
import Favorites from "./pages/PaginaFavorites";
import Signup from "./pages/PaginaSignup";
import Buscar from "./pages/PaginaBuscar";
import NavBar from "./components/NavBar";

const AppRoutes = () => (
  <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Buscar />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/favorites" element={<Favorites />}/>
          </Routes>
  </BrowserRouter>
);

export default AppRoutes;
