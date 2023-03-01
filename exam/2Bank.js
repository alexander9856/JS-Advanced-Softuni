class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }
    newCustomer(customer) {
        let { firstName, lastName, personalId } = customer;
        let found = this.allCustomers.filter((x) => x.personalId == personalId)[0];
        if (found) {
            throw new Error(`${firstName} ${lastName} is already our customer!`)
        }
        else {
            this.allCustomers.push({ firstName, lastName, personalId })
            return customer
        }
    }
    depositMoney(personalId, amount) {
        let searched = this.allCustomers.filter((x) => x.personalId === personalId)[0]
        if (!searched) {
            throw new Error('We have no customer with this ID!')
        }
        else {
            if (!searched.hasOwnProperty('totalMoney')) {
                searched['totalMoney'] = 0
                searched['transactions'] = []
            }
            searched['totalMoney'] += amount
            searched['transactions'].unshift({ type: 'deposit', amount })

            return `${searched.totalMoney}$`
        }
    }
    withdrawMoney(personalId, amount) {
        let searched = this.allCustomers.filter((x) => x.personalId === personalId)[0]
        if (!searched) {
            throw new Error('We have no customer with this ID!')
        }
        else {
            if (searched.totalMoney < amount) {
                throw new Error(`${searched.firstName} ${searched.lastName} does not have enough money to withdraw that amount!`)
            }
            searched.totalMoney -= amount
            searched['transactions'].unshift({ type: 'withdraw', amount })
            return `${searched.totalMoney}$`
        }
    }
    customerInfo(personalId) {
        let searched = this.allCustomers.filter((x) => x.personalId === personalId)[0]
        if (!searched) {
            throw new Error('We have no customer with this ID!')
        }
        else {
            let res = `Bank name: ${this._bankName}\nCustomer name: ${searched.firstName} ${searched.lastName}\nCustomer ID: ${personalId}\nTotal Money: ${searched.totalMoney}$\nTransactions:\n`
            let counter = searched.transactions.length
            searched.transactions.forEach(el => {
                if(el.type == 'deposit'){
                    res += `${counter}. ${searched.firstName} ${searched.lastName} made deposit of ${el.amount}$!\n`
                    counter--
                }
                else{
                    res += `${counter}. ${searched.firstName} ${searched.lastName} withdrew ${el.amount}$!\n`
                    counter--
                }
            })
            return res.trim()
        }
    }

}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));
bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);
console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.customerInfo(6233267));


