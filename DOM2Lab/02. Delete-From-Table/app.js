function deleteByEmail() {
        let input = document.querySelector('input[name="email"]');
        let rows = Array.from(document.querySelector('tbody').children);

        for(let i of rows){
            if(i.children[1].textContent == input.value ){
                document.getElementById('result').textContent = 'Deleted.'
                i.remove()
            }
            else{
                document.getElementById('result').textContent = 'Not found.'

            }
        }

}