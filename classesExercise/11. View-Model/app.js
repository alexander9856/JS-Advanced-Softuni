class Textbox {
    constructor(selector, regex) {
        this._elements = document.querySelectorAll(selector)
        this._invalidSymbols = regex;
        this._value = ''
        this._elements[0].addEventListener("input", () => {
            this._elements[1].value = this._elements[0].value;
            this._value = this._elements[0].value;
        });
    }
    get value(){
        return this._value;
    }
    set value(val){
        Array.from(this._elements).forEach((el) => (el.value = val));
        this._value = val
    }
    get elements(){
        return this._elements
    }
    isValid(){
        if(this._value.match(this._invalidSymbols)){
            return false
        }
        else{
            return true
        }
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click', function () { console.log(textbox.value); });
// textbox._value = 'sdfdfwd'