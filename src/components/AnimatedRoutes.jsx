import Live from "../pages/Live";
import Home from "../pages/Home";
import Link from "../pages/Link";
import Packs from "../pages/Packs";
import Shop from "../pages/Shop";
import About from "../pages/About";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/live" element={<Live />} />
        <Route path="/link" element={<Link />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/packs" element={<Packs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
