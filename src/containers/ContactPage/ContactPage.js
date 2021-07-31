import React from "react";

import ContactInfo from "@/components/ContactPage/ContactInfo";
import SocialInfo from "@/components/ContactPage/SocialInfo";

const Contact = ({ props }) => {
	const { title, socialMedia, contactInfo } = props;

	return (
		<section className="contact container">
			<div className="contact__wrapper">
				<h2 className="title title--contact title--main contact__title">{title}</h2>
				<ContactInfo data={contactInfo} classes="contact__info" />
			</div>
			<SocialInfo classes="contact__social" data={socialMedia} />
		</section>
	);
};

export default Contact;
