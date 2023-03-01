class Textbox {
    constructor(selector, regEx) {
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regEx;
        this._elements[0].addEventListener("input", () => {
            this._elements[1].value = this._elements[0].value;
            this._value = this._elements[0].value;
        });
    }

    get elements() {
        return this._elements;
    }

    get value() {
        return this._value;
    }

    set value(str) {
        console.log("hello");
        Array.from(this._elements).forEach((el) => (el.value = str));
        this._value = str;
    }

    isValid() {
        let temp = this._invalidSymbols.exec(this.value);
        if (temp === null) {
            return true;
        } else {
            return false;
        }
    }
}
solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)