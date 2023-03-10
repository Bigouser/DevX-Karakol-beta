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
					<div className="logo">
						<img src={devxLogo} alt="iksu_devx_logo" width={100} />
						<p>
							Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Et
							adipisci maiores at repellat, <br /> vel vitae non nulla aliquam
							eaque id laboriosam ut odio <br /> quod eum sed esse corrupti,
							dolorem alias.
						</p>
					</div>
					<div className="links">
						<ul>
							<li>
								<a className="blue_line" href="#">
									Courses
								</a>
							</li>
							<li>
								<a href="#">Lorem</a>
							</li>
							<li>
								<a href="#">Lorem</a>
							</li>
						</ul>
						<ul>
							<li>
								<a className="blue_line" href="#">
									Karakol-IKSU
								</a>
							</li>
							<li>
								<a href="#">About Us</a>
							</li>
							<li>
								<a href="#">FAQs</a>
							</li>
						</ul>
						<ul>
							<li>
								<a className="blue_line" href="#">
									Contact Us
								</a>
							</li>
							<li>
								<a href="#">Lorem, ipsum.</a>
							</li>
							<li>
								<a href="#">Lorem, ipsum.</a>
							</li>
						</ul>
					</div>
				</div>
				<hr color="white" />
				<div className="lower_content">
					<span>Copyright © 2023 WEDEVX | Powered by WEDEVX</span>
					<ul>
						<li>
							<a href="">
								<img src={instIcon} width={40} alt="inst" />
							</a>
						</li>
						<li>
							<a href="">
								<img src={githubIcon} width={40} alt="github" />
							</a>
						</li>
						<li>
							<a href="">
								<img src={discordIcon} width={40} alt="discord" />
							</a>
						</li>
					</ul>
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
