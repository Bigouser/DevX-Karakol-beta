import React from "react";
import scss from "./Footer.module.scss";

export const Footer = () => {
	return (
		<div className={scss.footer}>
			<div className="container">
			<h2 className={scss.title}>
					The site is under construction! <br />
					by: Elcho911, Sherbolot, Janeta, Zarina!
				</h2>
			</div>
		</div>
	);
};
