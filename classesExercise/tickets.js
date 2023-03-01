function ticketsBate(arr, criteria) {
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price= Number(price);
            this.status = status;
        }
    }
    let container = []
    for(let i of arr){
        let [destination, price, status] = i.split('|');
        let ticket = new Ticket(destination,price,status)
        container.push(ticket) 
    }
    if(criteria == 'destination'){
        container.sort((a,b) => a.destination.localeCompare(b.destination))
    }
    else if(criteria == 'price'){
        container.sort((a,b) => a.price  - b.price)
    }
    else if(criteria == 'status'){
        container.sort((a,b) => a.status.localeCompare(b.status))
    }
    return container
}
ticketsBate(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'


)