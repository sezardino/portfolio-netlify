import React from "react";
import { Link } from "gatsby";

import Portal from "../../components/Portal/Portal";
import ModalDescription from "../../components/WorkModal/ModalDescription/ModalDescription";
import ModalView from "../../components/WorkModal/ModalView/ModalView";

const Modal = ({ props, closeHandler }) => {
	const show = props ? true : false;
	const { description, desktop, mobile, name, repo, technologies, view: viewLink } = props;

	const viewData = {
		desktop,
		mobile,
		name,
	};

	const descriptionData = {
		name,
		repo,
		viewLink,
		technologies,
		description,
	};

	return (
		<Portal>
			<div className={`popup ${show ? "popup--show" : ""}`}>
				<div className="popup__overlay" onClickCapture={closeHandler}></div>
				<div className=" popup__wrapper">
					<div className="popup__container">
						<Link to="/works/" className="popup__button" onClick={closeHandler}></Link>
						<h2 className="popup__title popup__title--mobile">{name}</h2>
						<ModalView classes="popup__view" data={viewData} />
						<ModalDescription classes="popup__description" data={descriptionData} />
					</div>
				</div>
			</div>
		</Portal>
	);
};

export default Modal;
