const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "src"),
				"@cms": path.resolve(__dirname, "src/cms"),
			},
		},
	});
};
