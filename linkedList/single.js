class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	// TC: O(1) Constant Time
	addFromHead(data) {
		const newNode = new Node(data);
		newNode.next = this.head;
		this.head = newNode;
	}

	// TC: O(n) Linear Time
	addFromTail(data) {
		const newNode = new Node(data);
		if (!this.head) {
			this.head = newNode;
			return;
		}
		let currentNode = this.head;
		while (currentNode.next) {
			currentNode = currentNode.next;
		}
		newNode.next = null;
		currentNode.next = newNode;
	}

	size() {
		let count = 0;
		let currentNode = this.head;
		while (currentNode.next) {
			count++;
			currentNode = currentNode.next;
		}
		return count;
	}

	// TC: O(n) Linear Time
	addAt(index, data) {
		if (index < 0 || index > this.size()) {
			console.error("Invalid index");
			return;
		}
		if (index === 0) {
			this.addFromHead(data);
			return;
		}
		let currentNode = this.head;
		for (let i = 0; i < index - 1; i++) {
			currentNode = currentNode.next;
		}
		const newNode = new Node(data);
		newNode.next = currentNode.next;
		currentNode.next = newNode;
	}

	removeTop() {
		if (!this.head) {
			console.error("List is empty");
			return;
		}
		this.head = this.head.next;
	}

	// TC: O(n) Linear Time
	removeFromTail() {
		if (!this.head) {
			return console.error("List is empty");
		}

		let currentNode = this.head;
		while (currentNode.next.next) {
			currentNode = currentNode.next;
		}
		currentNode.next = null;
	}

	// TC: O(n) Linear Time
	removeAt(index) {
		if (index < 0 || index > this.size()) {
			console.error("Invalid index");
			return;
		}
		let currentNode = this.head;
		for (let i = 0; i < index - 1; i++) {
			currentNode = currentNode.next;
		}
		if (currentNode.next) {
			currentNode.next = currentNode.next.next;
		}
	}

	// TC: O(n) Linear Time
	printNodes() {
		let currentNode = this.head;
		while (currentNode.next) {
			console.log("Data=>", currentNode.data);
			currentNode = currentNode.next;
		}
	}
}

const ll = new LinkedList();
ll.addFromHead(1);
ll.addFromHead(2);
ll.addFromHead(3);
ll.addFromHead(4);
ll.addFromHead(5);
ll.addFromHead(6);
ll.addFromTail(7);
ll.addAt(2, 12);
ll.removeTop();
ll.removeFromTail();
ll.removeAt(2);
ll.printNodes();
console.log(ll);
