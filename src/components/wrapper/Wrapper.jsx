import React from "react";
import { Header } from "./header/Header";
import { Main } from "./main/Main";
import { Footer } from "./footer/Footer";
import scss from "./Wrapper.module.scss";

export const Wrapper = () => {
	return (
		<div className={scss.wrapper}>
			<header>
				<Header />
			</header>
			<main>
				<Main />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};
