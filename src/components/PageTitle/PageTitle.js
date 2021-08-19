import React from "react";

const PageTitle = ({ title, classes }, ref) => {
	return (
		<h2 className={`title title--main ${classes}`} style={{ opacity: 0 }} ref={ref}>
			{title.map((word) => {
				return (
					<span className="row" key={word}>
						{word.split("").map((letter, index) => (
							<span className="title__letter title__letter--scale" key={`${letter}-${index}`}>
								{letter}
							</span>
						))}
					</span>
				);
			})}
		</h2>
	);
};

const forwardRef = React.forwardRef(PageTitle);

export default forwardRef;
