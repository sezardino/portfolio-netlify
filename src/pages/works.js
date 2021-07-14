import { graphql } from "gatsby";
import React, { useEffect, useState } from "react";
import Modal from "../components/parts/modal";
import Works from "../components/screens/works";
import Layout from "../layouts";

const worksDataTransform = (array) => {
	const formattedData = array.map((item) => {
		const {
			html,
			frontmatter: { title, mockup, projectImages, projectLinks, technologies },
		} = item.node;

		const { desktopImage, mobileImage } = projectImages;
		const { repository: repo, view } = projectLinks;

		return {
			description: html,
			name: title,
			technologies,
			desktop: desktopImage,
			mobile: mobileImage,
			repo,
			view,
			mockup,
		};
	});
	return formattedData;
};

const WorksPage = ({ data }) => {
	const [currentWork, setCurrentWork] = useState(null);
	const { allMarkdownRemark: worksData, markdownRemark: pageData } = data;
	const pageProps = pageData.frontmatter;
	const works = worksDataTransform(worksData.edges);

	useEffect(() => {
		const hash = window.location.hash?.slice(1);
		if (hash) {
			worksHandler(hash);
		}
	}, []);

	const worksHandler = (name) => {
		const currentWork = works.find((item) => item.name === name);

		setCurrentWork(currentWork);
	};
	const closeHandler = () => {
		setCurrentWork(null);
	};
	return (
		<Layout seo={pageProps.seo}>
			<Works props={pageProps} works={works} worksHandler={worksHandler} />
			{currentWork && <Modal props={currentWork} closeHandler={closeHandler} />}
		</Layout>
	);
};

const query = graphql`
	query {
		markdownRemark(fileAbsolutePath: { regex: "/works.md/" }) {
			frontmatter {
				screenTitle
				infoText
				seo {
					description
					title
					image {
						childImageSharp {
							fluid(quality: 100, maxHeight: 200) {
								src
							}
						}
					}
				}
			}
		}
		allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
			edges {
				node {
					frontmatter {
						title
						mockup {
							childImageSharp {
								fluid(quality: 100) {
									src
								}
							}
						}
						projectImages {
							desktopImage {
								childImageSharp {
									fluid(quality: 100) {
										src
									}
								}
							}
							mobileImage {
								childImageSharp {
									fluid(quality: 100) {
										src
									}
								}
							}
						}
						projectLinks {
							repository
							view
						}
						technologies {
							technology
						}
					}
					html
				}
			}
		}
	}
`;

export { query };
export default WorksPage;
