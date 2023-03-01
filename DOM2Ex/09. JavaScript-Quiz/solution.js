function solve() {
  let sections = Array.from(document.getElementsByTagName('section'));
  let hiddenSecs = Array.from(document.getElementsByClassName('hidden'));
  let output = document.querySelector('#results .results-inner h1')

  for (let i = 0; i < sections.length; i++) {
    let answer1 = document.getElementsByClassName('quiz-answer low-value')[i].addEventListener('click', onClick);
    let answer2 = document.getElementsByClassName('quiz-answer high-value')[i].addEventListener('click', onClick);
  }
  let arr = [];
  function onClick(ev) {
    arr.push(ev.target.textContent);
    let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents']
    if (sections.length >= 1) {
      sections[0].style.display = 'none'
      sections.shift()
    }
    if (hiddenSecs.length >= 1) {
      hiddenSecs[0].style.display = 'block'
      hiddenSecs.shift()
    }
    if (sections.length == 0) {
      let counter = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == correctAnswers[i]){
          counter++
        }
      }
      if (counter == 3) {
        document.getElementById('results').style.display = 'block'
        output.textContent = "You are recognized as top JavaScript fan!"
      }
      else {
        document.getElementById('results').style.display = 'block'
        output.textContent = `You have ${counter} right answers`
      }
    }
  }
}
