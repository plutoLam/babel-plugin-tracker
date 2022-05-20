// const babel = require("@babel/core");
// const traverse = require("@babel/traverse");

module.exports = function({ template }) {
	const commentsMap = new Set(); // 存储所有的注释
	function handleComments(path, comments, commentName, pathBody) { // 去重
		// 找出行注释
		if (comments && comments.length && !commentsMap.has(comments)) {
			commentsMap.add(comments);
			replaceComments(path, comments, commentName, pathBody);
		// const commentsValue = comments.filter(v => v.type === "CommentLine").map(v => v.value);
		// console.log("commentsValue: ", commentsValue);
		// console.log(commentsMap);
		}
	}
	function replaceComments(path, comments, commentName, pathBody) {
		if (!comments?.length) return;
		for (let i = comments.length - 1; i >= 0; i--) {
			const comment = comments[i];
			if (comment?.type === "CommentLine") { // 只替换行级
				// console.log("comment: ", comment);
				console.log(commentName, "待更换的注释是", comment.value);
				const pointAST = template.statement(`var buried="${comment.value}";`)();
				// console.log("pointAST: ", pointAST.type);
				pathBody.push(pointAST);
				path.node[commentName].splice(i, 1); // path.get取出来的不行
			}
		}
	}
	return {
		visitor: {
			/* "FunctionDeclaration|ArrowFunctionExpression|FunctionExpression|ClassMethod"(path) {
				// console.log(path.type, path.node.name);
				const innerComments = path.get("innerComments");
				console.log("innerComments: ", innerComments);
			} */
			/* ClassMethod(path) {
				console.log(path.node);
				const innerComments = path.get("innerComments");
				console.log("innerComments: ", innerComments);
				handleComments(path.node.body.innerComments);
			} */
			// ClassDeclaration(path) {
			// 	console.log(path.type, path.node.body.body[0].body.innerComments);
			// const innerComments = path.node.body.innerComments;
			// // 找出块级元素
			// const innerCommentsValue = innerComments.filter(v => v.type === "CommentLine").map(v => v.value);
			// console.log("innerCommentsValue: ", innerCommentsValue);
			// }
			Program: {
				enter(path) {
					console.log("enter");
				},
				exit(path) {
					console.log("exit");
				}
			},
			"FunctionDeclaration|ClassDeclaration|ArrowFunctionExpression"(path, config) {
				// 读取plugin数组的第二个参数配置
				// console.log("config: ", config.opts);
				// console.log(path.type, path.node.body.innerComments);
				// console.log(path.type);
				// handleComments(path.node.body.innerComments);
				let duplicationKey = null;
				// 全局id 数组 [0]
				// console.log("key", path.key);
				path.traverse({
					enter(path) {
						// console.log("pathKey: ", path.node.type, path.key);
						// console.log(path.node);
						const innerComments = path.node.innerComments;
						const leadingComments = path.node.leadingComments;
						const trailingComments = path.node.trailingComments;
						handleComments(path, innerComments, "innerComments", path.node.body);
						// 为了去重，必须要在这里判断是否有leading
						if (leadingComments?.length) {
							/* if (!(duplicationKey && path.key - 1 === duplicationKey)) { // 如果没有在上一次已经被当做trail处理过
								console.log("key", path.key, path.getSibling(path.key - 1)?.node?.trailingComments, duplicationKey);
								handleComments(path, leadingComments, "leadingComments", path.parent.body);
							} */
							// console.log("key", path.inList, path.getSibling(path.key - 1)?.node?.trailingComments, path.key, path?.parent?.body?.node?.trailingComments);
							if (!path.getSibling(path.key - 1)?.node?.trailingComments.length && path) { // 如果上个兄弟节点有trail则不处理
								handleComments(path, leadingComments, "leadingComments", path.parent.body);
							}
						}
						// , path.getSibling(path.key - 1)?.node?.trailingComments, duplicationKey
						if (trailingComments?.length) {
							// console.log("key", path.key);
							handleComments(path, trailingComments, "trailingComments", path.parent.body);
						}
						if (!isNaN(path.key)) {
							duplicationKey = path.key;
						}

						if (innerComments?.length) {

							// for (let i = innerComments.length - 1; i >= 0; i--) {
							// 	const comment = innerComments[i];
							// 	// console.log("comment: ", comment);
							// 	console.log("待更换的注释是", comment.value);
							// 	const pointAST = template.statement(`var buried=${comment.value}`)();
							// 	console.log("pointAST: ", pointAST.type);
							// 	path.node.body.push(pointAST);

							// 	path.get("innerComments").splice(i, 1);
							// }
						}
						if (leadingComments?.length) {

							// console.log("hasleading", path.parent.type);
							// const parent = path.parent;
							// for (let i = leadingComments.length - 1; i >= 0; i--) {
							// 	const comment = leadingComments[i];
							// 	if (comment?.type === "CommentLine") { // 只替换行级
							// 		console.log("待更换的注释是", comment.value);
							// 		const pointAST = template.statement(`var buried=${comment.value}`)();
							// 		console.log("pointAST: ", pointAST.type);
							// 		parent.body.push(pointAST);
							// 		path.get("leadingComments").splice(i, 1);
							// 	}
							// }

							// path.findParent(parentPath => {
							// 	console.log("parentPath: ", parentPath.node.name);
							// 	const bodyPath = path.get("body");
							// 	if (parentPath.isBlockStatement()) {
							// 		// console.log("父节点的path", parentPath.container.comments?.map(v => v.value));
							// 		// console.log("parentPath: ", parentPath.node);
							// 		// parentPath.stop();
							// 	}
							// });
						}
						// handleComments(innerComments);
						// handleComments(leadingComments);
					}
				});
			}
			/* "FunctionDeclaration|ArrowFunctionExpression|FunctionExpression|ClassMethod"(path, state) {
				const coment = path.get("leadingComments")[0] || {};
				console.log("coment: ", coment);
				const comentNode = coment.node;
				console.log("comentNode: ", comentNode);

				// if (!comentNode) {
				// 	path.findParent((parentPath) => {
				// 		const coment = parentPath.node.leadingComments;
				// 		if (!coment) {
				//     	return false;
				// 		} else {
				// 			const comentNode = coment[0] || {};
				// 			setAutoTracker(path, state, template, comentNode);
				//     	return true;
				// 		}
				// 	});
				// } else {
				// 	setAutoTracker(path, state, template, comentNode);
				// }
			} */
		}
	};
};