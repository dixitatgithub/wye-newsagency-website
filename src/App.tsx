import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import ServicePage from "./pages/ServicePage";

import { Routes, Route } from "react-router-dom"; // <-- make sure to import

function App() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Routes>

        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<Category />} /> {/* new */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;