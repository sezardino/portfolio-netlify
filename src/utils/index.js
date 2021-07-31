export const transformWorksData = (array) => {
	const formattedData = array.map((item) => {
		const {
			html,
			frontmatter: { title, mockup, projectImages, projectLinks, technologies },
		} = item.node;

		return {
			description: html,
			name: title,
			technologies,
			desktop: projectImages?.desktopImage,
			mobile: projectImages?.mobileImage,
			repo: projectLinks?.repository,
			view: projectLinks?.view,
			mockup,
		};
	});
	return formattedData;
};

export const getMenuData = (menu, index) => {
	const next = menu[index + 1 >= menu.length ? 0 : index + 1];
	const prev = menu[index - 1 < 0 ? menu.length - 1 : index - 1];
	return { prev, next };
};
