function truncate(str, maxLen) {
	if (str.length > maxLen) {
		return str.slice(0, maxLen) + "...";
	} else return str;
}

const a = truncate("HELLO WORLD", 5);
console.log({ a });

const b = truncate("HELLO", 10);
console.log({ b });

const c = truncate("ThIS IS HELLO WORLD ", 7);
console.log({ c });
