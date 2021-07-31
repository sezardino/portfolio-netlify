import React from "react";

const ContactInfo = ({ data, classes }) => {
	return (
		<ul className={`info ${classes}`}>
			{data.map((item) => (
				<li className="info__item" key={item.name}>
					<span className="info__def">{item.label}:</span>
					<span className="info__data">{item.content}</span>
					<a
						href={`${item.name === "Telephone" ? "tel" : "mailto"}:${item.content}`}
						className="info__data info__link"
					>
						{item.content}
					</a>
				</li>
			))}
		</ul>
	);
};

export default ContactInfo;
