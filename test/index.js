// @debug
class App {
	// inner
	/* 块级 */
	// 123
	inClass() {
		// buried-0
		console.log(213);
	}
}
// 外边的猴嘴

function fn() { // fn右边
	// buried-1
	const a = 1;
	function inFn() {
		// buried-2
		// buried-3
		console.log(2);
		// buried-4
	}
	// 猴嘴
	inFn();

	function testFn() {
		const a = 123;
		// buried-7
		function test() {
			console.log(234);
			// buried-5
			const arr = () => {
				// buried-6
				function haha() {
					// aaa
				}
			};
		}
	}
}
fn();

const a = () => {
	// buri
};
a();