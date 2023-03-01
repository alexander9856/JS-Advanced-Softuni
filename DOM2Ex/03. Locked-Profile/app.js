function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach(el => el.addEventListener('click', onToggle))
    function onToggle(e) {
        let profile = e.target.parentElement
        let isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if(isActive){
            let infoDif = profile.querySelector('div');

            if(e.target.textContent == 'Show more'){
                infoDif.style.display = 'block';
                e.target.textContent = 'Hide it';
            }
            else{
                infoDif.style.display = '';
                e.target.textContent = 'Show more'
            }
        }
    }
}