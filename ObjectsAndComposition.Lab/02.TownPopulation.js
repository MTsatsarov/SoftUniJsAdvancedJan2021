



function townRecord(townsAsArray) {
    const towns = {};

    for (let townAsString of townsAsArray) {
        let currentTown = townAsString.split(" <-> ");
        let townName = currentTown[0];
        let population = Number(currentTown[1]);

        if (towns[townName] == undefined) {
            towns[townName] = population;
        } else {
            towns[townName] +=population;
        }
    }

    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`)
    }
}


townRecord(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)

townRecord(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)