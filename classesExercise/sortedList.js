class List {
    constructor() {
        this.arr = [];
        this.size = 0
    }
    add(el) {
        this.arr.push(el)
        this.size++
        this.arr.sort((a, b) => a - b)
    };
    remove(index) {
        if (index < this.arr.length && index >= 0) {
            this.arr.splice(index, 1)
            this.size--
            this.arr.sort((a, b) => a - b)
        }
        else {
            throw new Error('index is outside the valid params')
        }
    };
    get(index) {
        if (index < this.arr.length && index >= 0) {
            return this.arr[index]
        }
        else {
            throw new Error('index is outside the valid params')
        }
    };
}

let list = new List();
list.add(8);
list.add(15);
list.add(6);
console.log(list.get(10));
list.remove(1);
console.log(list.get(1));
console.log(list.size)
