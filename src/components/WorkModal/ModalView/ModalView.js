import React, { useState, createRef } from "react";
import desktopIcon from "../../../assets/images/desktop.svg";
import mobileIcon from "../../../assets/images/mobile.svg";
import useScroll from "../../../hooks/useScroll";

const ModalView = ({ data, classes }) => {
	const viewRef = createRef(null);
	const { desktop, mobile, name } = data;
	const scrollPosition = useScroll(viewRef);
	const [view, setView] = useState(true);
	const desktopImg = <img src={desktop.childImageSharp.fluid.src} alt={name} />;
	const mobileImg = <img src={mobile?.childImageSharp.fluid.src} alt={name} />;

	return (
		<div className={`view ${classes} popup__view`}>
			<div className="view__wrapper">
				<div className="view__mockup-wrapper">
					<div className={`view__mockup view__mockup--${view ? "desktop" : "mobile"}`}>
						<div className="view__img" ref={viewRef}>
							{view ? desktopImg : mobileImg}
						</div>
					</div>
					<div className="scroll scroll--black view__scroll">
						<div className="scroll__track">
							<div
								className="scroll__bar"
								style={{
									top: `${scrollPosition / 2}%`,
									transform: "translate(-50%, 0%)",
								}}
							></div>
						</div>
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
	);
};

export default ModalView;
