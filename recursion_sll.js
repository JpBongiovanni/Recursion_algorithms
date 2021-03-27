class Node {
    constructor(value) {
        this.val = value;
        this.next = null; 
    }
}

class SLL{
    constructor(){
        this.head = null;
    }

    display(){
        var runner = this.head
        var str = ''
        while(runner!=null){
            str += runner.val + " "
            runner = runner.next
        }
        return str
    }

    recListLen(){
        var runner = this.head
        var count = 0
        while (runner != null){
            count = count + 1
            runner = runner.next
        }
        return count
    }
}

var myNode1 = new Node(32)
var myNode2 = new Node(1)
var myNode3 = new Node(5)
var myNode4 = new Node(32)
var myNode5 = new Node(2)
var myNode6 = new Node(2)

var newNode = new Node()

var sll1 = new SLL()

sll1.head = myNode1

myNode1.next = myNode2
myNode2.next = myNode3
myNode3.next = myNode4
myNode4.next = myNode5
myNode5.next = myNode6

//sll2

var sll2Node1 = new Node(400)
var sll2Node2 = new Node(90)
var sll2Node3 = new Node(36)
var sll2Node4 = new Node(29)
var sll2Node5 = new Node(67)
var sll2Node6 = new Node(98)

var sll2 = new SLL()

sll2.head = sll2Node1

sll2Node1.next = sll2Node2
sll2Node2.next = sll2Node3
sll2Node3.next = sll2Node4
sll2Node4.next = sll2Node5
sll2Node5.next = sll2Node6

console.log(sll1.display())
console.log(sll1.recListLen())