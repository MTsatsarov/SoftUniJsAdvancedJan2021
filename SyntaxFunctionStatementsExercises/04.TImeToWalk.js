function timeToGo(steps, footPrintInMeters, speed) {
    let restMinutes = Math.floor((steps * footPrintInMeters) / 500);
    let speedInMetersForSec = speed * 1000 / 3600;
    let time = ((steps * footPrintInMeters) / speedInMetersForSec) + restMinutes * 60;

    let hours = Math.floor(time / 60 / 60);
    let minutes = Math.floor(((time - (hours*3600))/60));
    let seconds = time - (hours * 60 * 60) - (minutes * 60);

    console.log(`${hours.toFixed(0).padStart(2, "0")}:${minutes.toFixed(0).padStart(2,"0")}:${seconds.toFixed(0)}`);
}
timeToGo(4000, 0.60, 5);
timeToGo(2564, 0.70, 5.5);