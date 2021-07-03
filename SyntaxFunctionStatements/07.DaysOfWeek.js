function logNumber(dayOfWeek) {
    let number = 0;
    switch (dayOfWeek) {
        case "Monday": number = 1; break;
        case "Tuesday": number = 2; break;
        case "Wednesday": number = 3; break;
        case "Thursday": number = 4; break;
        case "Friday": number = 5; break;
        case "Saturday": number = 6; break;
        case "Sunday": number = 7; break;
    }

    if (number == 0) {
        console.log("error");
    } else {
        console.log(number);
    }
}

logNumber("Monday");
logNumber("Tuesday");
logNumber("Wednesday");
logNumber("Thursday");
logNumber("Friday");
logNumber("Saturday");
logNumber("Sunday");

logNumber("Invalid");
