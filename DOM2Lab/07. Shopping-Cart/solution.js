function solve() {
    document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick)
    let output = document.getElementsByTagName('textarea')[0];
    let checkout = document.getElementsByClassName('checkout')[0].addEventListener('click', checkoutClick);
    let cart = [];

    function onClick(ev) {
        if (ev.target.tagName == 'BUTTON' && ev.target.className == 'add-product') {
            let product = ev.target.parentNode.parentNode;
            let name = product.querySelector('.product-title').textContent;
            let price = Number(product.querySelector('.product-line-price').textContent)
            cart.push({name,price})
            output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`

        }
    }

    function checkoutClick(ev){
        let products = new Set();
        
        let price = 0
        cart.forEach(p => products.add(p.name))
        cart.forEach(p => price += Number(p.price))
        output.value += `You bought ${[...products.keys()].join(', ')} for ${price.toFixed(2)}.`

        document.getElementsByClassName('shopping-cart')[0].removeEventListener('click', onClick);
        document.getElementsByClassName('checkout')[0].removeEventListener('click', checkoutClick);

    }
}