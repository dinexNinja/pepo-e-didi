import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Febre from './pages/febre/PaginaFebre'
import Frequencia from './pages/frequencia'
import Ingresso from './pages/ingresso'
import CorPrimaria from './pages/corPrimaria'
import Maior from './pages/maior/index'
import Media from './pages/media/index'
import Tabuada from "./pages/tabuada";
import Soma from "./pages/soma";
import Dobro from "./pages/dobro";




export default function SiteRoutes (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/febre" element={< Febre />} />
            <Route path="/frequencia" element={< Frequencia />} />
            <Route path="/ingressocinema" element={< Ingresso />} />
            <Route path="/maior" element={< Maior />} />
            <Route path="/corprimaria" element={< CorPrimaria />} />
            <Route path="/media" element={< Media />} />
            <Route path="/tabuada" element={< Tabuada />} />
            <Route path="/soma" element={< Soma />} />
            <Route path="/dobro" element={< Dobro />} />
        </Routes>
        </BrowserRouter>
    );
}