import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/About us";
import SignUp from "./pages/SignUp";
import ProductDetails1 from "./pages/ProductDetails/ProductDetails1";
import ProductDetails2 from "./pages/ProductDetails/ProductDetails2";
import ProductDetails3 from "./pages/ProductDetails/ProductDetails3";
import ProductDetails4 from "./pages/ProductDetails/ProductDetails4";
import ProductDetails5 from "./pages/ProductDetails/ProductDetails5";
import ProductDetails6 from "./pages/ProductDetails/ProductDetails6";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/ProductDetails1" element={<ProductDetails1 />} />
        <Route path="/ProductDetails2" element={<ProductDetails2 />} />
        <Route path="/ProductDetails3" element={<ProductDetails3 />} />
        <Route path="/ProductDetails4" element={<ProductDetails4 />} />
        <Route path="/ProductDetails5" element={<ProductDetails5 />} />
        <Route path="/ProductDetails6" element={<ProductDetails6 />} />
        <Route path="/About Us" element={<AboutUs/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;