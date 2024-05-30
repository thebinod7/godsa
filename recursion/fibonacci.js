function fibonacci(n) {
	if (n <= 1) return n;
	return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(3);
console.log("result=>", result);

// function generateSeries(num) {
// 	let series = [];

// 	for (let i = 0; i < num; i++) {
// 		series.push(fibonacci(i));
// 	}
// 	return series;
// }

// const s = generateSeries(8);
// console.log("Series=>", s);
