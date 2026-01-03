import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeRoute from "./home/home";
import FortuneRoute from "./fortune/fortune";
import ContainerRoute from "./contenedores/contenedores";

export default function RoutesManager(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeRoute />}/>
                <Route path="/proyects/fortune" element={<FortuneRoute />}/>
                <Route path="/proyects/contenedores" element={<ContainerRoute />}/>
            </Routes>
        </BrowserRouter>
    )
}
