module.exports = `
window.AddStatistic = function(category, action) {
	window._hmt && window._hmt.push(["_trackEvent", category, action]);
};
`;