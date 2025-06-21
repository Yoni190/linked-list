class LinkedList {

    list = {}

    append(value){
        node = new Node(value)
    }
}

class Node {
    value = null
    nextNode = null

    constructor(value, nextNode=null){
        this.value = value
        this.nextNode = nextNode
    }
}







