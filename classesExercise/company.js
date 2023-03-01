// class Company {
//     constructor() {
//         this.departments = {};
//     }
//     addEmployee(name, salary, position, department) {
        // if ([...arguments].some(a => a === null || a === undefined || a === '') || salary < 0) {
        //     throw new Error('Invalid input!')
        // }
//         if (!name || !salary || !position || !department || salary < 0) {
//             throw new Error("Invalid input")
//         }
//         let user = { name, salary, position }
//         if (!this.departments.hasOwnProperty(department)) {
//             this.departments[department] = [];
//         }
//         this.departments[department].push(user)
//         return `New employee is hired. Name: ${name}. Position: ${position}`
//     }
//     bestDepartment() {
//         let obj = {}
//         for (let i in this.departments) {
//             let salaries = 0
//             let ppl = 0
//             this.departments[i].map((x) => {
//                 salaries += x.salary
//                 ppl++
//             })
//             let average = salaries / ppl
//             obj[i] = average
//         }
//         let best = 0
//         let company = ''

//         for (let i in obj) {
//             if (obj[i] > best) {
//                 best = obj[i]
//                 company = i
//             }
//         }
//         let res = ''
//         res += `Best Department is: ${company}\nAverage salary: ${best.toFixed(2)}\n`
//         this.departments[company].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
//             .forEach((el) => res += `${el.name} ${el.salary} ${el.position}\n`)
//         return res.trim()
//     }
// }

class Company {
    constructor() {
        this.departments = {}
    }
 
    addEmployee(name, salary, position, department) {
 
        if ([...arguments].some(a => a === null || a === undefined || a === '') || salary < 0) {
            throw new Error('Invalid input!')
        }
        if (!this.departments[department]) {
 
            this.departments[department] = []
 
        }
 
        this.departments[department].push({
            name,
            salary: Number(salary),
            position
        })
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
 
    bestDepartment() {
 
        let bestDep = "";
        let maxSalary = 0;
 
        for (let department in this.departments) {
 
            let avgSalary = 0;
            let ppl = this.departments[department].length;
            this.departments[department].map(a => avgSalary += a.salary);
            avgSalary /= ppl;
            if (maxSalary < avgSalary) {
                maxSalary = avgSalary;
                bestDep = department;
            }
 
        }
 
        let text = `Best Department is: ${bestDep}\nAverage salary: ${maxSalary.toFixed(2)}\n`
        this.departments[bestDep].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
        for (const dep in this.departments[bestDep]) {
            text += `${this.departments[bestDep][dep].name} ${this.departments[bestDep][dep].salary} ${this.departments[bestDep][dep].position}\n`
 
        }
 
        return text.trim()
    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());





