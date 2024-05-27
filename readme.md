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

# [Stack]

A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. Basic operations inlcude: Push, Pop, Peek(Top), Size, and isEmpty

# Anatomy of a Stack

A stack typically consists of the following operations:

1. Push: Adding an element to the top of the stack.
2. Pop: Removing and returning the top element of the stack.
3. Peek/Top: Returning the top element of the stack without removing it.
4. isEmpty: Checking if the stack is empty.
5. Size: Returning the number of elements currently in the stack.

# Use Cases:

1. Function Call Stack
2. Expression Evaluation: Used to evaluate postfix expressions (also known as Reverse Polish Notation).
3. Backtracking Algorithms: Used in algorithms like Depth-First Search (DFS) to keep track of visited nodes.
4. Undo Functionality: Used in text editors and software to implement undo operations.
5. Compiler Design: Used in syntax parsing and expression evaluation during compilation.

\*Note: Stack can be implemented using Array and Linked List

# Queue

A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. In a queue, elements are added at the back (rear) and removed from the front

# Anatomy of a Queue

A queue typically supports the following operations:

1. Enqueue: Add an element to the end (rear).
2. Dequeue: Remove and return the element from the front of the queue.
3. Front/Peek: Return the element at the front of the queue without removing it.
4. isEmpty: Check if the queue is empty.
5. Size: Return the number of elements in the queue.

# Applications of Queues

1. CPU Scheduling: Managing processes in operating systems using time-sharing and scheduling algorithms.
2. Breadth-First Search (BFS): Implementing BFS in graph traversal algorithms.
3. Handling Requests in Web Servers: Managing incoming requests to ensure they are processed in the order they arrive.
4. Printer Spooling: Managing print jobs in the order they are received.
5. Simulation Systems: Modeling real-world systems like customer service, traffic management, etc.
