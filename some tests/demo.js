function ab(input) {
    let name = input[0];
    let grades = 1; //broi klasowe
    let sum = 0; // suma na ocenkite
    let excluded = 0; // w koi klas sa te izkluchili
    let index = 0;

    while (grades <= 12) {
        index++;
        let grade = Number(input[index]);
        if (grade < 4) {
            grades++
            excluded++;
            console.log(`${name} has been excluded at ${excluded.toFixed(2)} grade`);
            continue;
        }
        sum += grade;
        let average = sum / grades;
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
        grades++;
        break;
    }
}
ab(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])
