function myStack() {
	this.q1 = [];
	this.q2 = [];
}

myStack.prototype.push = function (d) {
	// 1. Remove from q1 and add to q2
	while (this.q1.length !== 0) {
		this.q2.push(this.q1.shift());
	}
	// 2. Insert new item
	this.q1.push(d);
	while (this.q2.length !== 0) {
		// 3. Remove from q2 and add to q1
		this.q1.push(this.q2.shift());
	}
};

myStack.prototype.pop = function () {
	this.q1.shift();
};

myStack.prototype.top = function () {
	return this.q1[0];
};

myStack.prototype.empty = function () {
	return this.q1.length === 0;
};

let obj = new myStack();
obj.push(5);
obj.push(10);
obj.push(15);
obj.push(20);
