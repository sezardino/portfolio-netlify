import React from "react";

const ContactInfo = ({ data, classes }, ref) => {
	return (
		<ul className={`info ${classes}`} ref={ref}>
			{data.map((item) => (
				<li className="info__item" key={item.name} style={{ opacity: 0 }}>
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

const forwardRef = React.forwardRef(ContactInfo);

export default forwardRef;
