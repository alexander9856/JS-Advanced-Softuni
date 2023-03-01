function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('textarea').value)
      let outputFirst = document.querySelector('#outputs>#bestRestaurant>p')
      let outputSecond = document.querySelector('#outputs>#workers>p');

      let restaurants = {};
      input.map((x) => {
         let restaurantInfo = x.split(' - ');
         let restaurant = restaurantInfo.shift();
         let workers = restaurantInfo.toString().split(', ');
         let obj = {}
         workers.forEach((el) => {
            let [name, salary] = el.split(' ')
            obj[name] = salary;
         })
         !restaurants.hasOwnProperty(restaurant) ? restaurants[restaurant] = obj : Object.assign(restaurants[restaurant], obj)
      })
      let bestRestaurant = bestAndAverage(restaurants);
      outputFirst.textContent = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].average} Best Salary: ${bestRestaurant[1].best}`;
      bestRestaurant.shift();
      let res = ''
      bestRestaurant.map((x) => {
         let sorted = Object.entries(x).sort((a, b) => b[1] - a[1])
         for (let b of sorted) {
            if (b[0] == 'average' || b[0] == 'best') {
               continue
            }
            res += `Name: ${b[0]} With Salary: ${b[1]} `
         }
      })
      outputSecond.textContent = res
   }
   function bestAndAverage(restaurants) {
      let best = Number.MIN_SAFE_INTEGER;
      let entries = Object.entries(restaurants);
      let average = 0;
      let counter = 0;
      entries.forEach((el) => {
         for(let i in el[1]){
            if (best < Number(el[1][i])) {
               best = Number(el[1][i])
            }
            average += Number(el[1][i])
            counter++
         }
         el[1].average = (average / counter).toFixed(2)
         counter = 0
         average = 0
         el[1].best = best.toFixed(2)
         best = 0;
      })
      entries = Object.entries(restaurants)
      let sorted = entries.sort((a, b) => b[1].average - a[1].average)
      return sorted[0]
   }
}

