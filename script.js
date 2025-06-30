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

    size(){
        return this.list.length;
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
list.prepend(2)
list.append(3)
list.prepend(4)
list.append(5)
console.log(list.size())

console.log(list.list)







