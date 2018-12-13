// this script replaces placeholders with binding expressions in resulting CSS file

// tslint:disable-next-line:no-namespace
namespace css {
	// tslint:disable-next-line:no-var-requires
	let replace = require("replace-in-file");
	let fs = require("fs");

	let optionsCss = {
		files: "src/elements/colours/at-colours.css",
		from: [
			/primaryColor/g,
			/secondaryColor/g,
			/errorColor/g,
			/successColor/g,
			/headerColor/g,
			/menuButtonColor/g,
		],
		to: [
			"${mdCs.primaryColor}",
			"${mdCs.secondaryColor}",
			"${mdCs.errorColor}",
			"${mdCs.successColor}",
			"${atCs.headerColor}",
			"${atCs.menuButtonColor}",
		]
	};

	replace.sync(optionsCss);

	let styles = fs.readFileSync("./" + optionsCss.files);
	let optionsHtml = {
		files: "src/elements/colours/at-colours.html",
		from: /(\/\* style-replace-start \*\/)[\s\S]*(\/\* style-replace-end \*\/)/,
		to: "$1" + styles + "$2"
	};
	replace.sync(optionsHtml);
}
