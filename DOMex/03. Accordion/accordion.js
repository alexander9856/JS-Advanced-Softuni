function toggle() {
    let butt = document.getElementsByClassName('button')[0];
    let hidden = document.getElementById('extra')
    if(butt.textContent == 'More'){
        butt.textContent = 'Less';
        hidden.style.display ='block'
    }
    else if (butt.textContent == 'Less'){
        butt.textContent = 'More';
        hidden.style.display = 'none'
    }

}