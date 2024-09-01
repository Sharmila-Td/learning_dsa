//singly linked list

// create a Node
class Node {
    constructor(data){
        this.data = data; // value stored in the node
        this.next = null; // pointer to the next node
    }
}

// linked list
class LinkedList{
    constructor(){
        this.head = null;
    }
    //add a new node to the end of the list
    append(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode; // Add new node at the end
    }
    // print all the nodes
    printList(){
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next;
        }
    }
}

// Example usage
const list = new LinkedList();
list.append("Apple");
list.append("Banana");
list.append("cherry");
list.printList();