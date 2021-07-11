

function heroiclog(arr) {
    let myObj = [];
    while (arr.length) {
        let myArr = arr.shift();
        let [name, level, itemAsString] = myArr.split(' / ');
        level = Number(level);
        const items = itemAsString.split(', ')
        myObj.push({ name, level, items });
    }
    return JSON.stringify(myObj);
}



console.log(heroiclog(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
))