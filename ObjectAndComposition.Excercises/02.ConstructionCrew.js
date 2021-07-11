

function worker(obj) {
    var myObj = {
        weight,
        experience,
        levelOfHydrated,
        dizziness,

    } = obj;

    if (myObj.dizziness) {
        myObj.levelOfHydrated += (myObj.weight*0.1) * experience;
        myObj.dizziness = false;
    }

    return myObj;
}

console.log(worker({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
))