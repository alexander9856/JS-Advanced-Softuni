function createSortedList() {
    return {
        nums: [],
        add(num) {
            this.size++
            return this.nums.push(num)
        },
        get(index) {
            if (index >= 0 && index < this.nums.length) {
                this.nums.sort((a,b) => a - b)
                return this.nums[index]
            }
        },
        remove(index) {
            if (index >= 0 && index < this.nums.length) {
                this.size--
                return this.nums.splice(index, 1)
            }
        },
        size: 0
    }
}


let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size)
