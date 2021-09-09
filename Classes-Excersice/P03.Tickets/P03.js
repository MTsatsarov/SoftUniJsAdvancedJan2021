function solve(arr, criteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination,
                this.price = price,
                this.status = status
        }

    }
    var tickets = [];
    for (let i = 0; i < arr.length; i++) {
        const [destination, price, status] = arr[i].split('|');
        tickets.push(new Ticket(destination, price, status));
    };
    const sorter = {
        'destination': (a, b) => a.destination.localeCompare(b.destination),
        'price': (a, b) => a.price.localeCompare(b.price),
        'status': (a, b) => a.status.localeCompare(b.status),
    }

    return tickets.sort(sorter[criteria]);
}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'))