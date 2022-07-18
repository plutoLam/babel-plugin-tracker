const xlsx = require("node-xlsx");

module.exports = function ({ template }) {
	function handleComments(path, comments, commentName, pathBody, buriedInfo, isAdd) {
		if (!comments?.length) return;
		for (let i = comments.length - 1; i >= 0; i--) {
			const comment = comments[i];
			if (comment?.type === "CommentLine") { // 只替换行级
				const commentArr = comment.value.split("-");
				if (commentArr && commentArr[0]?.trim() === "buried") {
					if (isAdd) {
						console.log(commentName, "待更换的注释是", comment.value);
						const id = commentArr[1].trim();
						// console.log("buriedInfo[id]", id, buriedInfo[id]);
						const params = buriedInfo[id] === undefined ? undefined : buriedInfo[id].map(v => {
							return v && v[0] === "#" ? v.slice(1, v.length) : `"${v}"`;
						});
						const pointAST = template.statement(`window.AddStatistic(${params[0]},${params[1]});`)();
						pathBody.push(pointAST);
					}
					path.node[commentName].splice(i, 1); // path.get取出来的不行
				}
			}
		}
	}
	function parseXlsx(excelFilePath) {
		// 解析excel, 获取到所有sheets
		const sheets = xlsx.parse(excelFilePath);
		const sheet = sheets[0];
		return sheet.data.reduce((v, t) => {
			if (t[1] === "id") return v;
			const paramsArr = [];
			for (let i = 3; i < t.length; i++) {
				paramsArr.push(t[i]);
			}
			v[t[1]] = paramsArr;
			return v;
		}, {});
	}
	return {
		visitor: {
			Program: {
				enter(path, state) {
					console.log("enter");
					const { xlsxPath, func, script } = state.opts;
					state.buriedInfo = parseXlsx(xlsxPath);

					// 注入添加script代码
					const addSctipt = `(function() {
						const script = document.createElement("script");
						script.type = "text/javascript";
						script.src = "${script}";
						document.getElementsByTagName("head")[0].appendChild(script);
					})();`;
					const addSctiptNode = template(addSctipt)();
					path.node.body.unshift(addSctiptNode);
					const globalNode = template(`window.AddStatistic = ${func}`)();
					path.node.body.unshift(globalNode);
				},
				exit(path) {
					console.log("exit");
				}
			},
			"FunctionDeclaration|ClassDeclaration|ArrowFunctionExpression"(path, state) {
				path.traverse({
					enter(path) {
						if (path.isFunctionDeclaration() || path.isArrowFunctionExpression() || path.isClassDeclaration()) {
							path.skip();
						}
						const innerComments = path.node.innerComments;
						const leadingComments = path.node.leadingComments;
						const trailingComments = path.node.trailingComments;
						handleComments(path, innerComments, "innerComments", path.node.body, state.buriedInfo, true);
						const isSiblingTrailExit = !path.getSibling(path.key - 1)?.node?.trailingComments;
						handleComments(path, leadingComments, "leadingComments", path.parent.body, state.buriedInfo, isSiblingTrailExit);
						handleComments(path, trailingComments, "trailingComments", path.parent.body, state.buriedInfo, true);
					}
				});
			}
		}
	};
};