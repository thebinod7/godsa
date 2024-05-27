# [Array]

An array is a data structure used to store a collection of elements, typically of the same data type, in a contiguous block of memory.

# Characteristics:

1. Fixed size
2. Homogeneous elements => Elements of same data type
3. Index based access

# Basic Operations:

1. Push => Add element at the end
2. Pop => Remove element from end
3. Shift => Remove first element from array
4. Unshift => Add element at the beginning

# Common use cases:

1. Storing data
2. Matrix representation
3. Buffer management
4. Sorting and Searching

# [Linked List]

A linked list is a linear data structure where elements, called nodes, are arranged sequentially. Unlike arrays, linked lists do not store elements in contiguous memory locations. Instead, each node in a linked list contains a reference (or pointer) to the next node in the sequence.

A node consists of data and pointer to next node.

\*Note: Traversal take place from Head to Tail where Head is first and Tail is last Node.

# Types:

1. Single => Each node points to next one and last node points to null
2. Doubly => Each node can have both prev. and next pointer
3. Circular => Last node points back to first node

# Pros:

1. Dynamic size
2. Efficient Insert & Delete
3. Memory efficient => More efficient because they do not require contiguous memory allocation

# Cons:

1. No Random Access of an element
2. Extra memory overhead. Each node requires memory for data as well as pointers
3. Buffer management
4. Sorting and Searching

# Common Use Cases:

1. Implementation of Stack and Queue
2. Dynamic memory allocation
3. Undo functionality in any text editor
4. Caching system design
