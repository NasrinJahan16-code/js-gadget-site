import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;