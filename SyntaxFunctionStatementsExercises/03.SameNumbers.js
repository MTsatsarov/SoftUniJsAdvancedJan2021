function getSameNumbers(data) {
    let number = String(data);
    let sum=0;
    let same = true;
    for (let index = 0; index < number.length - 1; index++) {

        let currNumber = number[index];
        let nextNumber = number[index + 1];
        if (currNumber !== nextNumber) {
            same = false;
        }
        sum += Number(currNumber);
    }
    sum += Number(number[number.length - 1]);
    console.log(same);
    console.log(sum);

}

getSameNumbers(2222222);
getSameNumbers(1234);