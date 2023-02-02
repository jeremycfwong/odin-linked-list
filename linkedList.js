class LinkedList {
    constructor(head = null){
        this.head = head;
    }

    append(value){
        let newNode = new Node(value);
        let node = this.head;
        

        if (node == null){
            this.head = newNode;
            return;
        }

        while(node.nextNode){
            node = node.nextNode;
        }

        node.nextNode = newNode;
    }

    prepend(value){
        let newNode = new Node(value);

        let node = this.head;

        if (node == null) {
            this.head = newNode;
            return;
        }

        newNode.nextNode = node;
        this.head = newNode;
    }

    size(){
        let count = 0;
        let node = this.head;

        while(node){
            count++;
            node = node.nextNode;
        }

        return count;
    }

    head(){
        return this.head;
    }

    tail(){
        let node = this.head;

        while(node.nextNode){
            node = node.nextNode;
        }

        return node;
    }

    at(index){
        let node = this.head;

        for(let i = 0; i < index; i++){
            node = node.nextNode;
        }

        return node;
    }

    pop(){
        let index = this.size() - 2;

        this.at(index).nextNode = null;
    }

    contains(value){
        let node = this.head;

        while(node){
            if (node.value == value){
                return true;
            }
            node = node.nextNode;
        }

        return false;
    }

    find(value){
        let node = this.head;
        let count = 0;

        while(node){
            if(node.value == value){
                return count;
            }
            node = node.nextNode;
            count ++;
        }

        return null;
    }

    toString(){
        let node = this.head;
        
        while(node){
            process.stdout.write(`( ${node.value} ) -> `)
            node = node.nextNode;
        }

        process.stdout.write('null');
        console.log();
    }

    insertAt(value,index){
        let node = this.head;
        let newNode = new Node(value);

        for(let i = 0; i < index - 1; i++){
            node = node.nextNode;
        }

        newNode.nextNode = node.nextNode;
        node.nextNode = newNode;
    }

    removeAt(index){
        let node = this.head;

        for(let i = 0; i < index - 1; i++){
            node = node.nextNode;
        }

        let removed = node.nextNode
        let replacementNode = removed.nextNode;

        node.nextNode = replacementNode;
    }

   
}

class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}