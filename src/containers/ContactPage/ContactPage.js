import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

import ContactInfo from "../../components/ContactPage/ContactInfo";
import SocialInfo from "../../components/ContactPage/SocialInfo";
import useGsap from "../../hooks/useGsap";

const Contact = ({ props }) => {
	const { title, socialMedia, contactInfo } = props;
	const tl = useGsap();
	const titleRef = useRef(null);
	const infoRef = useRef(null);
const socialRef = useRef(null);

	useEffect(() => {
		const title = titleRef.current;
		const info = infoRef.current.children;
		const social = socialRef.current.children;
		tl.set([title, info, social], { opacity: 0 })
			.fromTo(title, { x: "+=100%", rotate: "90deg" }, { x: 0, rotate: 0, opacity: 1, duration: 1.5 })
			.fromTo(info, { x: "+=100%", opacity: 0 }, { x: 0, opacity: 1, duration: 1.5, stagger: 0.5 })
			.fromTo(social, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5, stagger: 0.5 });
	}, []);

	return (
		<section className="contact container">
			<div className="contact__wrapper">
				<h2 className="title title--contact title--main contact__title" ref={titleRef} style={{ opacity: 0 }}>
					{title}
				</h2>
				<ContactInfo data={contactInfo} classes="contact__info" ref={infoRef} />
			</div>
			<SocialInfo classes="contact__social" data={socialMedia} ref={socialRef} />
		</section>
	);
};

export default Contact;
