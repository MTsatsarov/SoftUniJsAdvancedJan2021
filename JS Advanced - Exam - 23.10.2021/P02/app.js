class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 }
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error("Unsuccessful registration at the camp.")
        }
        if (this.listOfParticipants.some(x => x.name == name)) {
            return `The ${name} is already registered at the camp.`
        }
        if (this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`
        }
        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 })
        return `The ${name} was successfully registered.`

    }
    unregisterParticipant(name) {
        if (!this.listOfParticipants.some(x => x.name == name)) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }
        var index = this.listOfParticipants.findIndex(x => x.name == name)
        this.listOfParticipants.splice(index, 1)
        return `The ${name} removed successfully.`
    }
    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame == 'Battleship') {
            if (!this.listOfParticipants.some(x => x.name == participant1)) {
                throw new Error(`Invalid entered name/s.`)
            }
            var player = this.listOfParticipants.find(x => x.name == participant1)
            player.power += 20
            return `The ${player.name} successfully completed the game ${typeOfGame}.`

        }
        var playerOne = this.listOfParticipants.find(x => x.name == participant1)
        var playerTwo = this.listOfParticipants.find(x => x.name == participant2)
        if (!playerOne || !playerTwo) {
            throw new Error(`Invalid entered name/s.`)
        }
        if (playerOne.condition != playerTwo.condition) {
            throw new Error(`Choose players with equal condition.`)
        }
        if (playerOne.power > playerTwo.power) {
            playerOne.wins++;
            return `The ${playerOne.name} is winner in the game ${typeOfGame}.`
        }
        if (playerOne.power < playerTwo.power) {
            playerTwo.wins++;
            return `The ${playerTwo.name} is winner in the game ${typeOfGame}.`
        }
        return `There is no winner.`

    }
    toString() {
        var result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)
        var arr = this.listOfParticipants.sort((a, b) => b.wins - a.wins).forEach(x => result.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`))


        return result.join('\n')
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());

