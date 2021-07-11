

function assembleCar() {
    let engines =[
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 },
    ].sort((a,b) => a.power-b.power)

    return engines;
}



console.log(assembleCar());