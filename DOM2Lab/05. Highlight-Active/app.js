function focused() {
    let item = document.querySelectorAll(('input[type="text"]'));
    for(let i of item){
        i.addEventListener("focus", addClass)
        i.addEventListener("blur", removeClass)

    }

    function addClass(ev){
        let target = ev.target;
        target.parentNode.className = 'focused'
        
    }

    function removeClass(ev){
        let target = ev.target;
        target.parentNode.className = ''
    }
}