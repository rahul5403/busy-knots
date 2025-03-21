import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import CategoryDetail from "./pages/CategoryDetail";
import Cart from "./pages/Cart";
import { products } from "./data/products";
const App = () => {

  // const [cart, setCart] = useState([])

  // const addToCart = (product) => {
  //   setCart((prevCart) => {
  //     const existingProduct = prevCart.find((item) => item.id === product.id);
  //     if (existingProduct) {
  //       return prevCart.map((item) =>
  //         item.id === product.id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //     } else {
  //       return [...prevCart, { ...product, quantity: 1 }];
  //     }
  //   });
  // };

  // const removeFromCart = (productId) => {
  //   setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  // };

  // const updateQuantity = (productId, quantity) => {
  //   if (quantity <= 0) return removeFromCart(productId);

  //   setCart((prevCart) =>
  //     prevCart.map((item) =>
  //       item.id === productId ? { ...item, quantity } : item
  //     )
  //   );
  // };

  // console.log(cart)

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop products={products}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/category/:id" element={<CategoryDetail />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
