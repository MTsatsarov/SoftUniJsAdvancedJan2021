function speedRadar(speed, area) {
    let driverSpeed = Number(speed);
    let drivingArea = String(area);

    switch (drivingArea) {
        case "motorway":
            if (driverSpeed > 130) {
                let currentSpeed = driverSpeed - 130;
                if (currentSpeed >= 40) {
                    console.log(`The speed is ${currentSpeed} km/h faster than the allowed speed of 130 - reckless driving`)
                    break;
                }

                if (currentSpeed >= 20) {
                    console.log(`The speed is ${currentSpeed} km/h faster than the allowed speed of 130 - excessive speeding`)
                } else {
                    console.log(`The speed is ${currentSpeed} km/h faster than the allowed speed of 130 - speeding`)
                }

            } else {
                console.log(`Driving ${driverSpeed} km/h in a 130 zone`)
            }
            break;
        case "interstate":
            if (driverSpeed > 90) {
                let currentSpeed = driverSpeed - 90;
                if (currentSpeed >= 40) {
                    console.log(`The speed is ${currentSpeed} km/h faster than the allowed speed of 90 - reckless driving`)
                    break;
                }

                if (currentSpeed >= 20) {
                    console.log(`The speed is ${currentSpeed} km/h faster than the allowed speed of 90 - excessive speeding`)
                } else {
                    console.log(`The speed is ${currentSpeed} km/h faster than the allowed speed of 90 - speeding`)
                }

            } else {
                console.log(`Driving ${driverSpeed} km/h in a 90 zone`)
            }
            break;
        case "city":
            if (driverSpeed > 50) {
                let currentSpeed = driverSpeed - 50;
                if (currentSpeed >= 40) {
                    console.log(`The speed is ${currentSpeed} km/h faster than the allowed speed of 50 - reckless driving`)
                    break;
                }

                if (currentSpeed >= 20) {
                    console.log(`The speed is ${currentSpeed} km/h faster than the allowed speed of 50 - excessive speeding`)
                } else {
                    console.log(`The speed is ${currentSpeed} km/h faster than the allowed speed of 50 - speeding`)
                }

            } else {
                console.log(`Driving ${driverSpeed} km/h in a 50 zone`)
            }
            break;
        case "residential":
            if (driverSpeed > 20) {
                let currentSpeed = driverSpeed - 20;
                if (currentSpeed >= 40) {
                    console.log(`The speed is ${currentSpeed} km/h faster than the allowed speed of 20 - reckless driving`)
                    break;
                }

                if (currentSpeed >= 20) {
                    console.log(`The speed is ${currentSpeed} km/h faster than the allowed speed of 20 - excessive speeding`)
                } else {
                    console.log(`The speed is ${currentSpeed} km/h faster than the allowed speed of 20 - speeding`)
                }

            } else {
                console.log(`Driving ${driverSpeed} km/h in a 20 zone`)
            }
            break;

        default:
            break;
    }
}

speedRadar(40, 'city');
speedRadar(21, 'residential');
speedRadar(120, 'interstate');
speedRadar(200, 'motorway');