// 10-->5-->16

// let newLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next:{
//                 value:16,
//                 next: null
//             }
//         }
//     }
// }
class Node{
    constructor(value){
        this.value = value
        this.next=null
        this.previous = null
    }
}

class DoublyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
            previous: null
        }
        this.tail = this.head
        this.length = 1
    }

    
    append(value){
        const newNode = new Node(value)
            newNode.previous = this.tail
            this.tail.next = newNode
            this.tail = newNode
            this.length++
            return this
    }


    prepend(value){
        const newNode = new Node(value)
        newNode.next=this.head
        this.head.previous = newNode
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
      const follower = leader.next
      leader.next = newNode
      newNode.previous = leader
      newNode.next = follower
      follower.previous = newNode
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

const myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
// console.log(myLinkedList.printList())
myLinkedList.insert(1,99)
// console.log(myLinkedList.printList())
// myLinkedList.insert(3,20)
// console.log(myLinkedList.printList())
myLinkedList.remove(3)
// console.log(myLinkedList.printList())
// myLinkedList.remove(3)
// console.log(myLinkedList.printList())
console.log(myLinkedList.printList())
