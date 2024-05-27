// Implement queue using stacks todos:
// 1. enqueue(): Add into stack1 with push()
// 2. dequeue(): If stack2 is empty remove from stack1 and add to stack2
// 3. Remove top of stack2 using pop()
// 4. Return top element as front
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
