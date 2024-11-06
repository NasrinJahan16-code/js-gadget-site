import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import  { createContext, useState } from "react";


 export const  CartContext = createContext();
 export const WishlistContext = createContext();


    export  const CartProvider = ({children}) => {
        const [cart, setCart] = useState ([]);
        const addToCart = (item) =>{
            setCart((prevCart) => [...prevCart, item])
        };
        return(
           <CartContext.Provider value = {{ cart, setCart, addToCart }}>
            {children}
           </CartContext.Provider>
        );
    };


   

    export const WishlistProvider = ( {children} ) => {
        const[wCart, setWcart] = useState([]);
        const addToWhishList = (item) => {
            setWcart((prevCart) => [...prevCart, item]);
                };
                return(
                    <WishlistContext.Provider value = {{wCart, setWcart, addToWhishList}} >
                        {children}
                    </WishlistContext.Provider>
                );
    };



 export default function Root ()  {
    return (
        <WishlistProvider>
           <CartProvider>
        <div>
          <Navbar/>
            {/* <Home></Home> */}
            <Outlet></Outlet>
            <Footer></Footer>
        
       </div>
        </CartProvider> 
        </WishlistProvider>
    );
};

