class Node {
	constructor(data) {
		this.data = data;
		this.prev = null;
		this.next = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
	}

	addFirst(data) {
		const newNode = new Node(data);
		newNode.next = this.head;
		if (this.head) {
			this.head.prev = newNode;
		}
		this.head = newNode;
	}

	size() {
		let count = 0;
		if (!this.head) return count;
		let currentNode = this.head;
		while (currentNode.next) {
			currentNode = currentNode.next;
			count++;
		}
		return count;
	}

	addLast(data) {
		const newNode = new Node(data);
		if (!this.head) return (this.head = newNode);
		let currentNode = this.head;
		while (currentNode.next) {
			currentNode = currentNode.next;
		}
		newNode.prev = currentNode;
		currentNode.next = newNode;
	}

	addAt(ind, data) {
		if (ind < 0 || ind > this.size()) {
			return console.error("Invalid index!");
		}
		const newNode = new Node(data);
		if (ind === 0) {
			if (this.head) {
				this.head.prev = newNode;
			}
			this.head = newNode;
		}

		let currentNode = this.head;
		for (let i = 0; i < ind - 1; i++) {
			currentNode = currentNode.next;
		}

		newNode.prev = currentNode;
		newNode.next = currentNode.next;

		if (currentNode.next) {
			currentNode.next.prev = newNode;
		}
		currentNode.next = newNode;
	}

	removeFirt() {
		if (!this.head) return;
		this.head = this.head.next;
		if (this.head) this.head.prev = null;
	}

	removeLast() {
		if (!this.head) return;
		if (!this.head.next) return (this.head = null); // If there is single node
		let currentNode = this.head;
		while (currentNode.next.next) {
			currentNode = currentNode.next;
		}
		currentNode.next = null;
	}

	removeAt(ind) {
		if (ind < 0 || ind > this.size()) {
			return console.error("Invalid index!");
		}
		if (ind === 0) {
			this.head = this.head.next;
			if (this.head) {
				this.head = null;
			}
		}

		let currentNode = this.head;
		for (let i = 0; i < ind - 1; i++) {
			currentNode = currentNode.next;
		}

		if (currentNode.next) {
			currentNode.next = currentNode.next.next;
			currentNode.next.prev = currentNode;
		}
	}

	print() {
		let currentNode = this.head;
		while (currentNode) {
			console.log("Data=>", currentNode.data);
			currentNode = currentNode.next;
		}
	}
}

const dl = new DoublyLinkedList();
dl.addFirst(1);
dl.addFirst(2);
dl.addFirst(3);
dl.addFirst(4);
dl.addFirst(5);
dl.removeAt(3);
// dl.removeFirt();
// dl.addAt(2, 5);
// dl.addLast(101);

dl.print();
console.log("Size=>", dl.size());
