import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Newsletter from "./pages/Newsletter";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

function App() {

	const location = useLocation();

	return (
		<>
			<Navbar />
			<div className="container">
				<AnimatePresence mode="wait">
					<Routes key={location.pathname} location={location}>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/about" element={<About />} />
						<Route exact path="/contact" element={<Contact />} />
						<Route exact path="/newsletter" element={<Newsletter />} />
					</Routes>
				</AnimatePresence>
			</div>
			<Footer />
		</>
	);
}

export default App;
