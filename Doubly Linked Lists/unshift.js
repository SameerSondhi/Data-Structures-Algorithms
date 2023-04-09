class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
 
class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value){
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return temp;
    }

    //Unshift adds a value to the head of the DLL
	unshift(value){
        //Create a new node 
        const newNode = new Node(value)
        //If the length is 0, we simply need to make the head and tail point to the new Node
        if (!this.length===0){
            this.head = newNode
            this.tail = newNode
        }
        //If there are one or more items in the DLL
        else{
            //Adding a node to the head means making the node next to the newNode point to the head
            newNode.next = this.head
            //The node before the head must point to the new Node
            this.head.prev = newNode
            //Make the head node equal to the new node
            this.head = newNode
        }
        //Increases the length by one
        this.length++
        //Return the DLL
        return this
    }

}


function test() {
    let myDLL = new DoublyLinkedList(2);
    myDLL.push(3);

    console.log("Before unshift():");
    console.log("-----------------");
    myDLL.getHead();
    myDLL.getTail();
    myDLL.getLength();

    console.log("\nDoubly Linked List:");
    myDLL.printList();

    myDLL.unshift(1);

    console.log("\n\nAfter unshift():");
    console.log("----------------");
    myDLL.getHead();
    myDLL.getTail();
    myDLL.getLength();

    console.log("\nDoubly Linked List:");
    myDLL.printList();
    
}


test();


/*
    EXPECTED OUTPUT:

    Before unshift():
    -----------------
    Head: 2
    Tail: 3
    Length: 2

    Doubly Linked List:
    2
    3


    After unshift():
    ----------------
    Head: 1
    Tail: 3
    Length: 3

    Doubly Linked List:
    1
    2
    3

*/