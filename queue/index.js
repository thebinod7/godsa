// Front [1,2,3,4,5] <= Rear
class Queue {
	constructor() {
		this.queue = [];
	}

	enqueue(item) {
		this.queue.push(item);
	}

	dequeue() {
		if (this.isEmpty()) {
			console.log("Queue is empty");
			return;
		}
		this.queue.shift();
	}

	// Front
	peek() {
		return this.queue(0);
	}

	rear() {
		return this.queue[this.size() - 1];
	}

	size() {
		return this.queue.length;
	}

	isEmpty() {
		return this.queue.length === 0;
	}
}
