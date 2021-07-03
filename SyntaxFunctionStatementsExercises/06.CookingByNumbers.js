function cooking(number, commandOne, commandTwo, commandThree, commandFour, commandFive) {
    const arr = [commandOne, commandTwo, commandThree, commandFour, commandFive];
    let currNumber = Number(number);

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        switch (element) {
            case "chop":
                currNumber /= 2;
                console.log(currNumber)
                break;
            case "dice":
                currNumber = Math.sqrt(currNumber);
                console.log(currNumber)
                break;
            case "spice":
                currNumber++;
                console.log(currNumber)
                break;
            case "bake":
                currNumber *= 3;
                console.log(currNumber)
                break;
                case "fillet":
                    currNumber = currNumber - (currNumber*0.2);
                    console.log(currNumber)
                    break;
            default:
                break;
        }

    }
}
cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');