// Implement queue using stacks
function MyQueue() {
	this.stack1 = [];
	this.stack2 = [];
}

MyQueue.prototype.enqueue = function (d) {
	this.stack1.push(d);
};

MyQueue.prototype.dequeue = function () {
	if (this.stack2.length === 0) {
		// Remove from stack 1 and push to stack 2
		while (this.stack1.length > 0) {
			this.stack2.push(this.stack1.pop());
		}
	}

	return this.stack2.pop();
};

MyQueue.prototype.front = function () {
	if (this.stack2.length === 0) {
		// Remove from stack 1 and push to stack 2
		while (this.stack1.length > 0) {
			this.stack2.push(this.stack1.pop());
		}
	}

	return this.stack2[this.stack2.length - 1];
};

MyQueue.prototype.empty = function () {
	return this.stack1.length === 0 && this.stack2.length === 0;
};

let queue = new MyQueue();
queue.enqueue(3);
// queue.enqueue(6);
// queue.enqueue(9);
console.log("Front=>", queue.front());
