import { Outlet } from "react-router-dom";
import Menu from "../Menu/menu.jsx";
export default function Home(){
    return(
        <>
           <Menu />
           <Outlet />
        </>
    )
}

