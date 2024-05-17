class Node {
	constructor(key, value) {
		this.key = key;
		this.value = value;
		this.prev = null;
		this.next = null;
	}
}

class DLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	addFront(node) {
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head.prev = node;
			this.head = node;
		}
	}

	removeNode(node) {
		if (node === this.head) {
			this.head = node.next;
		} else if (node === this.tail) {
			this.tail = node.prev;
		} else {
			node.next.prev = node.prev;
			node.prev.next = node.next;
		}
	}

	removeFirst() {
		if (!this.head) return null;
		const removedNode = this.head;
		this.removeNode(removedNode);
		return removedNode;
	}
}

class LRUCache {
	constructor(limit) {
		this.limit = limit;
		this.cache = new Map();
		this.list = new DLinkedList();
	}

	get(key) {
		if (!this.cache.has(key)) return null;
		const node = this.cache.get(key);
		this.list.removeNode(node);
		this.list.addFront(node);
		return node.value;
	}

	put(key, value) {
		if (this.cache.has(key)) {
			// Update
			const node = this.cache.get(key);
			node.value = value;
			this.list.removeNode(node);
			this.list.addFront(node);
		} else {
			// Add
			if (this.cache.size >= this.limit) {
				const removedNode = this.list.removeFirst();
				this.cache.delete(removedNode.key);
			}
			const node = new Node(key, value);
			this.cache.set(key, node);
			this.list.addFront(node);
		}
	}
}

const cache = new LRUCache(3);
cache.put(1, "A");
cache.put(2, "B");
cache.put(3, "C");
console.log(cache.get(1)); // Output: A
cache.put(4, "D"); // Least recently used key (2, B) is removed
cache.put(5, "E");
cache.put(6, "F");
console.log(cache.get(5)); // Output: null, as it's removed
