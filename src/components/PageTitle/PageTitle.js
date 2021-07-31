import React from "react";

const PageTitle = ({ title, classes }) => {
	return (
		<h2 className={`title title--main ${classes}`}>
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

export default PageTitle;
