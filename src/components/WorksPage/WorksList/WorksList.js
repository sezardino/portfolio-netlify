import React, { createRef } from "react";
import { Link } from "gatsby";


import useScroll from "@/hooks/useScroll";

const WorksList = ({ works, className, handler }) => {
	const listRef = createRef(null);
	const scrollPosition = useScroll(listRef);

	return (
		<div className={className}>
			<ul className="portfolio__list" ref={listRef}>
				{works.map(({ name, mockup }) => {
					return (
						<li className="portfolio__item" key={name}>
							<Link className="portfolio__link" to={"#" + name.replaceAll(' ', '-')} onClick={() => handler(name)}>
								<img className="portfolio__img" src={mockup.childImageSharp.fluid.src} alt={name} />
							</Link>
						</li>
					);
				})}
			</ul>
			<div className="scroll scroll--white portfolio__scroll">
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

export default WorksList;
