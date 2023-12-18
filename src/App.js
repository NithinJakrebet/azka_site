
import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Newsletter from "./pages/Newsletter";
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/about" element={<About />} />
					<Route exact path="/contact" element={<Contact />} />
					<Route exact path="/newsletter" element={<Newsletter />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
