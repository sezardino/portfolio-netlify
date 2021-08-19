import { graphql, Link } from "gatsby";
import React from "react";
import ModalDescription from "../components/WorkModal/ModalDescription/ModalDescription";
import ModalView from "../components/WorkModal/ModalView/ModalView";
import EmptyLayout from "../layouts/Empty";

const ProjectTemplate = ({ data }) => {
	const {
		markdownRemark: {
			frontmatter: { projectImages, projectLinks, technologies, title: name, mockup },
		},
		html: description,
	} = data;
	const { desktopImage: desktop, mobileImage: mobile } = projectImages;
	const { repository: repo, view: viewLink } = projectLinks;

	const viewData = {
		desktop,
		mobile,
		name,
	};

	const descriptionData = {
		name,
		repo,
		viewLink,
		technologies,
		description,
	};

	return (
		<EmptyLayout seo={{ title: name, image: mockup, description: description || name }}>
			<div className="popup popup--show">
				<div className="popup__overlay"></div>
				<div className=" popup__wrapper">
					<div className="popup__container">
						<Link to="/works/" className="popup__button"></Link>
						<h2 className="popup__title popup__title--mobile">{name}</h2>
						<ModalView classes="popup__view" data={viewData} />
						<ModalDescription classes="popup__description" data={descriptionData} />
					</div>
				</div>
			</div>
		</EmptyLayout>
	);
};

const query = graphql`
	query ($slug: String) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				mockup {
					childImageSharp {
						fluid(quality: 70) {
							src
						}
					}
				}
				projectImages {
					desktopImage {
						childImageSharp {
							fluid(quality: 70) {
								src
							}
						}
					}
					mobileImage {
						childImageSharp {
							fluid(quality: 70) {
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
		}
	}
`;

export { query };
export default ProjectTemplate;
