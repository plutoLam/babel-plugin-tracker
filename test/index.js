// @debug
class App {
	// inner
	/* 块级 */
	// 123
	inClass() {
		// inClass
		console.log(213);
	}
}
// 外边的猴嘴

function fn() { // fn右边
	// fn
	console.log(buried);
	const a = 1;
	function inFn() {
		// inFn2
		// inFn
		console.log(buried);
		// 在log后面b前面
		const b = 2;
	}
	// 猴嘴
	inFn();

	function testFn() {
		console.log(123);
		function test() {
			console.log(234);
			// test
		}
	}
}
fn();

const a = () => {
	// a
	console.log(buried);
};
a();