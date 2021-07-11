import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import Portal from "./portal";

const Modal = () => {
	// const [loading, setLoading] = useState(true);
	const hash = window.location.hash?.slice(1);
	const [show, setShow] = useState(false);
	useEffect(() => {
		if (!hash) {
			setShow(false);
			return;
		}
		setShow(true);
		document.body.style.overflow = show ? "hidden" : "initial";
	}, [hash]);

	return (
		<Portal>
			<section className={`popup ${show ? "popup--show" : ""}`}>
				<div className=" popup__wrapper">
					<Link to="/works/" className="button button--close button--close--dark popup__button"></Link>
					{/* <h2 className="title title--main title--popup popup__title">{data.descr.name}</h2> */}
					<div className="view popup__view">
						<div className="view__wrapper">
							<div className="view__mockup-wrapper">
								<div className="view__mockup view__mockup--desktop">
									<div className="view__img">
										{/* <ImageComponent data={{ sharp: data.images.desktop, alt: data.descr.name }} /> */}
									</div>
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
							<button className="button button-view view__button button-view--active">
								<div className="button__image">
									{/* <ImageComponent url={desktopIcon} data={{}} /> */}
								</div>
								<span className="button-view__text">Desktop</span>
							</button>
						</div>
					</div>
					<div className="description popup__description">
						{/* <h2 className="title title--main title--popup description__title">{data.descr.name}</h2> */}
						<div className="description__buttons">
							{/* <Link
								to={data.descr.repo}
								target="blank"
								className="button button--github button--popup description__button"
							>
								View on GitHub
							</Link>
							<Link
								to={data.descr.repo}
								target="blank"
								className="button button--ghpages button--popup description__button"
							>
								View
							</Link> */}
						</div>
						{/* {data.descr.techn && (
							<div className="technologies description__technologies">
								<h3 className="title title--technologies technologies__title">Using Technologies</h3>
								<ul className="technologies__list">
									{data.descr.techn.map((item, index) => (
										<li className="technologies__item" key={`${item}-${index}`}>
											{item}
										</li>
									))}
								</ul>
							</div>
						)} */}
					</div>
				</div>
			</section>
		</Portal>
	);
};

export default Modal;
