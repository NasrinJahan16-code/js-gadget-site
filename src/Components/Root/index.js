import { CartProvider,WishlistProvider } from "./Root";
import ReactDOM from 'react-dom';
import React from "react";
import App from "App"


ReactDOM.Render(
    <React.StrictMode>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  