import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import { About } from "../../pages/About";
import { Contact } from "../../pages/Contact";
import { FullStack } from "../../pages/projects/FullStack";
import { Sdet } from "../../pages/projects/Sdet";
import { UiUx } from "../../pages/projects/UiUx";

export const Main: React.FC = () => {
	return (
		<div className="main">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/projects/fullstack" element={<FullStack />} />
				<Route path="/projects/sdet" element={<Sdet />} />
				<Route path="/projects/uiux" element={<UiUx />} />
			</Routes>
		</div>
	);
};