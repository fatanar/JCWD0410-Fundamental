// DATA STRUCTURE


//STACK =============================
//LIFO -> Last in first Out

class Stack{
    #container;
    #maxSize;
    constructor(){
        this.#container = []
        this.#maxSize = 10;
    }

    isFull(){
        return this.#container.length >= this.#maxSize;
    }

    //jika  kosong akan menandakan container kosong
    isEmpty(){
        return this.#container.length === 0;
    }
    push(element){
        if(this.isFull()){
            return 'container full'
        }
        this.#container.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return 'container kosong'
        }
        return this.#container.pop()
    }
    showcontainer(){
        return this.#container;
    }
}

const stack = new Stack();
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)
stack.push(1)

stack.pop(1)
stack.pop(1)
stack.pop(1)
stack.pop(1)
stack.pop(1)
stack.pop(1)
stack.pop(1)
stack.pop(1)
stack.pop(1)
stack.pop(1)
stack.pop(1)
stack.pop(1)
stack.pop(1)
stack.pop(1)
stack.pop(1)
stack.pop(1)
stack.pop(1)

stack.push(5)
stack.push(5)
stack.push(5)
stack.push(5)
stack.push(5)
stack.push(5)
stack.push(5)
stack.push(5)
stack.push(5)
stack.push(5)


console.log(stack.showcontainer());

//QUEUE
class Queue {
    #container;
    constructor(){
        this.#container = [];
    }

    enqueue(element){
        return this.#container.push(element);
    }

    dequeue(){
        return this.#container.shift();
    }

    showContainer(){
        return this.#container;
    }
}

const queue = new Queue();

console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3

));

console.log(queue.dequeue());

console.log(queue.showContainer());

//Set -> only unique value
const fruits = ["banana","apple","mango","apple"]

const newFruit = new Set(fruits)

//membuat Set
const mySet = new Set();

//Menambahkan nilai ke set
mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.add(2) //nilai ini tidak akan ditambahkan karena udah ada

console.log(mySet.add());

//mengecek apakah value yang dimasukan ada apa tidak di dalam set
console.log(mySet.has(3));

//Menghapus nilai dari set
mySet.delete(2)

console.log(mySet.delete(2));

//Looping isi Set
for(const value of mySet){
    console.log(value);
}

//Menghitung ukuran Set
console.log(mySet.size);

//ASCII CODE
// index Number = sum Ascii code
// myData = Array(9)


