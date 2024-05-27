class Stack {
	constructor() {
		this.stack = [];
	}

	push(element) {
		this.stack.push(element);
	}

	pop() {
		if (this.isEmpty()) return "Stack is empty!";
		return this.stack.pop();
	}

	isEmpty() {
		return this.size() === 0;
	}

	peek() {
		if (this.isEmpty()) return "Stack is empty!";
		return this.stack[this.size() - 1];
	}

	size() {
		return this.stack.length;
	}

	printStack() {
		for (let i = 0; i < this.size(); i++) {
			console.log("Item=>", this.stack[i]);
		}
	}
}

const stack = new Stack();

stack.push("A");
stack.push("B");
stack.push("C");
stack.pop();
console.log("Size:", stack.size());
console.log("Peek:", stack.peek());
stack.printStack();
