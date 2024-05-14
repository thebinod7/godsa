class Node {
	// Node class to represent a key-value pair
	constructor(key, value) {
		this.key = key;
		this.value = value;
		this.prev = null;
		this.next = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	addToFront(node) {
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head.prev = node;
			this.head = node;
		}
		this.size++;
	}

	removeNode(node) {
		if (node === this.head) {
			this.head = node.next;
		} else if (node === this.tail) {
			this.tail = node.prev;
		} else {
			node.prev.next = node.next;
			node.next.prev = node.prev;
		}
		this.size--;
	}

	removeLast() {
		if (!this.tail) return null;
		const removedNode = this.tail;
		this.removeNode(removedNode);
		return removedNode;
	}
}

class LRUCache {
	constructor(limit) {
		this.limit = limit;
		this.cache = new Map();
		this.linkedList = new DoublyLinkedList();
	}

	get(key) {
		if (!this.cache.has(key)) return null;
		const node = this.cache.get(key);
		this.linkedList.removeNode(node);
		this.linkedList.addToFront(node);
		return node.value;
	}

	put(key, value) {
		if (this.cache.has(key)) {
			const existingNode = this.cache.get(key);
			existingNode.value = value;
			this.linkedList.removeNode(existingNode);
			this.linkedList.addToFront(existingNode);
		} else {
			if (this.cache.size >= this.limit) {
				const removedNode = this.linkedList.removeLast();
				this.cache.delete(removedNode.key);
			}
			const newNode = new Node(key, value);
			this.cache.set(key, newNode);
			this.linkedList.addToFront(newNode);
		}
	}
}

// Example usage:
const cache = new LRUCache(3); // Limiting cache size to 3

cache.put(1, "A");
cache.put(2, "B");
cache.put(3, "C");
console.log(cache.get(1)); // Output: A
cache.put(4, "D"); // Least recently used key (2, B) is removed
console.log(cache.get(2)); // Output: null, as it's removed
