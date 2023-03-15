class Node{
    constructor(value){
        this.value = value
        this.next=null
    }
}

class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head
        this.length = 1
    }

    
    append(value){
        const newNode = new Node(value)
            this.tail.next = newNode
            this.tail = newNode
            this.length++
            return this
    }


    prepend(value){
        const newNode = new Node(value)
        newNode.next=this.head
        this.head = newNode
        this.length++
        return this
    }

    insert(index, value){
       if(index>=this.length){
        return this.append(value)
       }
       const newNode = new Node(value)
      const leader = this.traverse(index-1)
      const holdPointer = leader.next
      leader.next = newNode
      newNode.next = holdPointer
      this.length++
      return this.printList
       }   

    remove(index){
        if(index>=this.length || index<0){
            return null
           }
           const leader = this.traverse(index-1)
           const nodeToRemove = leader.next
           leader.next = nodeToRemove.next
           this.length--
           return this.printList
            }   
       
    
    traverse(index){
        let counter = 0
        let currentNode = this.head
        while(counter!==index){
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    reverse(){
       if(!this.head.next){
        return this.head
       }
       let firstNode = this.head
       console.log("firstNode is ", firstNode)
       this.tail = this.head
       console.log("this.tail is ", this.tail)
       let secondNode = firstNode.next
       console.log("secondNode is ", secondNode)
       while(secondNode){
        const temp = secondNode.next
        console.log("this is temp ", temp)
        secondNode.next = firstNode
        console.log("this is secondNode.next ", secondNode.next)
        firstNode = secondNode
        console.log("this is firstNode now ", firstNode)
        secondNode = temp
        console.log("this is secondNode now ", secondNode)
       }
        this.head.next = null
        this.head = firstNode
        console.log("this is this.head ", this.head)
        return this
    }

    printList(){
        const array = []
        let currentNode = this.head;
        while(currentNode!== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.append(20)
myLinkedList.append(45)
myLinkedList.reverse()
console.log(myLinkedList.printList())
