import React from "react";
import "../footer/Footer.scss";
import devxLogo from "../../../assets/logo.png";
import instIcon from "../../../assets/icons/instagram_icon.svg";
import githubIcon from "../../../assets/icons/github_icon.svg";
import discordIcon from "../../../assets/icons/discord_icon.svg";

export const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="content">
					<div className="footer__top">
						<div className="block">
							<img className="logo" src={devxLogo} alt="iksu_devx_logo" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
								adipisci maiores at repellat, vel vitae non ndivla aliquam eaque
								id laboriosam ut odio quod eum sed esse corrupti, dolorem alias.
							</p>
						</div>
						<div className="block">
							<h6>Courses</h6>
							<a href="#">Lorem</a>
							<a href="#">Lorem</a>
						</div>
						<div className="block">
							<h6>Karakol-IKSU</h6>
							<a href="#">About Us</a>
							<a href="#">FAQs</a>
						</div>
						<div className="block">
							<h6>Contact Us</h6>
							<a href="#">Lorem, ipsum.</a>
							<a href="#">Lorem, ipsum.</a>
						</div>
					</div>
					<hr />
					<div className="footer__bottom">
						<div className="copyright">
							Copyright © 2023 WEDEVX | Powered by WEDEVX
						</div>
						<div className="icons">
							<a href="">
								<img src={instIcon} width={40} alt="inst" />
							</a>
							<a href="">
								<img src={githubIcon} width={40} alt="github" />
							</a>
							<a href="">
								<img src={discordIcon} width={40} alt="discord" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

{
	/* <h2 className="title">
						The site is under construction! <br />
						by: Elcho911, Sherbolot, Janeta, Zarina!
					</h2> */
}
