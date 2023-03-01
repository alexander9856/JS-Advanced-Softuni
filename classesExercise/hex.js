class Hex {
    constructor(value) {
        this.value = value;
    }
    valueOf() {
        return this.value
    }
    toString(){
        return '0x' + this.value.toString(16).toUpperCase()
    }
    plus(numOrHex){
        return new Hex(this.value + numOrHex)
    }
    minus(numOrHex){
        return new Hex(this.value - numOrHex)
    }
    parse(str){
        return parseInt(str,16)
    }

}

let a = new Hex(10);
let b = new Hex(5);
let c = new Hex(155);
let act2 = a.plus(c).toString();
console.log(act2)
let exp2 = "0xA5";
let act3 = a.minus(b).toString();
console.log(act3)
let exp3 = "0x5";
