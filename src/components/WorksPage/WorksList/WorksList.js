import React from "react";
import { Link } from "gatsby";

import useScroll from "../../../hooks/useScroll";

const WorksList = ({ works, className }, ref) => {
	const scrollPosition = useScroll(ref);

	return (
		<div className={className}>
			<ul className="portfolio__list" ref={ref} style={{ opacity: 0 }}>
				{works.map(({ name, mockup, slug }) => {
					return (
						<li className="portfolio__item" key={slug}>
							<Link className="portfolio__link" to={slug}>
								<img className="portfolio__img" src={mockup.childImageSharp.fluid.src} alt={name} />
							</Link>
						</li>
					);
				})}
			</ul>
			<div className="scroll scroll--white portfolio__scroll" style={{ opacity: 0 }}>
				<div className="scroll__track">
					<div
						className="scroll__bar"
						style={{ top: `${scrollPosition / 2}%`, transform: "translateX(-50%)" }}
					></div>
				</div>
			</div>
		</div>
	);
};

const forwardRef = React.forwardRef(WorksList);

export default forwardRef;
