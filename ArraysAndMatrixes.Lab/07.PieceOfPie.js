

function getPies(myArr, firstTarget, secondTarget) {

    let arr = [];
    let startingNum = myArr.indexOf(firstTarget);
    let endingNum = myArr.indexOf(secondTarget);

    for (let i = startingNum; i <= endingNum; i++) {
        const element = myArr[i];
        arr.push(element);
    }
    return arr;
}

console.log(getPies(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
))

console.log(getPies(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
))