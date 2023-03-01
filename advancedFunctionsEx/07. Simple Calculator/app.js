function calculator() {
    let num1
    let num2
    let res

    return {
        init: (n1, n2, r) => {
            num1 = document.querySelector(n1)
            num2 = document.querySelector(n2)
            res = document.querySelector(r)
        },
        add: ()  => {
            res.value = Number(num1.value) + Number(num2.value)
        },
        subtract: () => {
            res.value = Number(num1.value) - Number(num2.value)
        }
    }


}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');




