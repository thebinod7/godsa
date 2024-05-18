// Two strings must be same length
// Different chars on two strings is HD

// str1 = hello
// str2 = telno
function calculateHammingDistance(str1, str2) {
	let hd = 0;
	str1 = str1.toString(2); // Convert to binary
	str2 = str2.toString(2); // Convert to binary

	if (str1.length < str2.length) {
		while (str1.length !== str2.length) str1 = "0" + str1;
	} else {
		while (str1.length !== str2.length) str2 = "0" + str2;
	}

	for (let i = 0; i < str1.length; i++) {
		if (str1[i] !== str2[i]) hd++;
	}
	return hd;
}

const a = calculateHammingDistance(2, 9);
console.log({ a });

const b = calculateHammingDistance("godsa", "nodsa");
console.log({ b });
