const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		main: path.resolve(__dirname, "./index.js")
	},
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "./dist")
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: [
						"@babel/preset-env"
					],
					plugins: [
						[
							path.resolve(__dirname, "../src/index.js"),
							{
								pathName: path.resolve(__dirname, "./tracker.js")
							}
						]

					]
				}

			}
		]
	}
};