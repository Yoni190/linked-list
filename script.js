class LinkedList {

    list = []

    append(value){

        const node = new Node(value, null)

        if(this.list.length > 0){
            this.list.at(-1).nextNode = node
        }

        this.list.push(node)
    }

    prepend(value){
        let pointer = null

        if(this.list.length > 0){
            pointer = this.list[0]
        }
        
        const node = new Node(value, pointer)
        this.list.unshift(node)
    }
}

class Node {
    value = null
    nextNode = null

    constructor(value, nextNode){
        this.value = value
        this.nextNode = nextNode
    }
}

const list = new LinkedList()
list.append(2)
list.append(3)
list.append(4)

console.log(list.list)







