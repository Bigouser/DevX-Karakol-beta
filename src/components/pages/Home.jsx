import React from "react";
import scss from "./Style.module.scss";

export const Home = () => {
	return (
		<div className={scss.home}>
			<div className="container">
				<div className={scss.content}>
					<h1>
						Welcome to <br /> DevX - Karakol website!
					</h1>
				</div>
			</div>
		</div>
	);
};
