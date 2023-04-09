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

	pop(){
        //if the DLL is empty
        if(!this.head || !this.tail || this.length===0){
        return undefined
        }
        //Assign a variable called temp to the tail node
       let temp = this.tail
       //If the length is 1, then we need to make head and tail point to null
       if(this.length===1){
        this.head = null
        this.tail = null
       }
       //If the length is greater than 1, we can remove the last node in the DLL
       else{
       //We make tail point to the node before it
       this.tail = this.tail.prev
       //We make the last node point to null
       this.tail.next = null
       //The node before tail must also point to null in order to remove the last node
       temp.prev = null
       }
       //Decrement the length
       this.length--
       //Return the value that was removed
       return temp
    }

}


function test() {
    let myDLL = new DoublyLinkedList(1);
    myDLL.push(2);

    // (2) Items in LL - Returns 2 Node
    if (myDLL.length !== 0) {
        console.log(myDLL.pop().value);
    } else {
        console.log("null");
    }

    // (1) Item in LL - Returns 1 Node
    if (myDLL.length !== 0) {
        console.log(myDLL.pop().value);
    } else {
        console.log("null");
    }

    // (0) Items in LL - Returns null
    if (myDLL.length !== 0) {
        console.log(myDLL.pop().value);
    } else {
        console.log("null");
    }
}


test();
 
    
/*
    EXPECTED OUTPUT:
    ----------------
    2
    1
    null

*/