import React, { useState } from "react";
import { Link } from "gatsby";
import Portal from "./portal";
import desktopIcon from "../../assets/images/desktop.svg";
import mobileIcon from "../../assets/images/mobile.svg";

const Modal = ({ props, closeHandler }) => {
	const [view, setView] = useState(true);
	const show = props ? true : false;
	const { description, desktop, mobile, name, repo, technologies, view: viewLink } = props;
	const desktopImg = <img src={desktop.childImageSharp.fluid.src} alt={name} />;
	const mobileImg = <img src={mobile?.childImageSharp.fluid.src} alt={name} />;

	return (
		<Portal>
			<div className={`popup ${show ? "popup--show" : ""}`}>
				<div className="popup__overlay" onClickCapture={closeHandler}></div>
				<div className=" popup__wrapper">
					<Link to="/works/" className="popup__button" onClick={closeHandler}></Link>
					<h2 className="popup__title popup__title--mobile">{name}</h2>
					<div className="view popup__view">
						<div className="view__wrapper">
							<div className="view__mockup-wrapper">
								<div className={`view__mockup view__mockup--${view ? "desktop" : "mobile"}`}>
									<div className="view__img">{view ? desktopImg : mobileImg}</div>
								</div>
							</div>
							<div className="scroll scroll--black view__scroll">
								<div className="scroll__track">
									<div
										className="scroll__bar"
										style={{ top: "0%", transform: "translate(-50%, 0%)" }}
									></div>
								</div>
							</div>
						</div>
						<div className="view__buttons">
							<button
								className={`button button-view view__button ${view ? "button-view--active" : ""}`}
								onClick={() => setView(true)}
							>
								<div className="button__image">
									<img src={desktopIcon} alt="open desktop version" />
									{/* <ImageComponent url={desktopIcon} data={{}} /> */}
								</div>
								<span className="button-view__text">Desktop</span>
							</button>
							{mobile && (
								<button
									className={`button button-view view__button ${!view ? "button-view--active" : ""}`}
									onClick={() => setView(false)}
								>
									<div className="button__image">
										<img src={mobileIcon} alt="open mobile version" />
									</div>
									<span className="button-view__text">Mobile</span>
								</button>
							)}
						</div>
					</div>
					<div className="description popup__description">
						<h2 className="title title--main title--popup description__title">{name}</h2>
						<div className="description__buttons">
							<a
								href={repo}
								target="blank"
								className="button button--github button--popup description__button"
							>
								View on GitHub
							</a>
							<a
								href={viewLink}
								target="blank"
								className="button button--ghpages button--popup description__button"
							>
								View
							</a>
						</div>
						{technologies && (
							<div className="technologies description__technologies">
								<h3 className="title title--technologies technologies__title">Using Technologies</h3>
								<ul className="technologies__list">
									{technologies.map(({ technology }) => (
										<li className="technologies__item" key={technology}>
											{technology}
										</li>
									))}
								</ul>
							</div>
						)}
						{description && (
							<div className="description__text">
								<h3 className="title title--technologies">Description</h3>
								<div
									className="description__text-body"
									dangerouslySetInnerHTML={{ __html: description }}
								></div>
							</div>
						)}
					</div>
				</div>
			</div>
		</Portal>
	);
};

export default Modal;
