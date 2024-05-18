function isAnagram(s, t) {
	s = s.split("").sort().join("");
	t = t.split("").sort().join("");

	return s === t;
}

// Optimized solution
function checkAnagram(s, t) {
	if (s.length !== t.length) return false;
	let obj1 = {};
	let obj2 = {};

	for (let i = 0; i < s.length; i++) {
		obj1[s[i]] = (obj1[s[i]] || 0) + 1;
		obj2[s[i]] = (obj2[s[i]] || 0) + 1;
	}

	for (const key in obj1) {
		if (obj1[key] !== obj2[key]) return false;
	}
	return true;
}

const a = checkAnagram("anagram", "nagaram");
console.log({ a });
