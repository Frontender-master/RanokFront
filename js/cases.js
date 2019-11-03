const monthName = "January";
let season;

switch (monthName) {
    case "June":
        season = "summer";
        break;
    case "May":
        season = "spring";
        break;
    case "September":
        season = "autumn";
        break;
    default:
        season = "winter";
}

console.log(season); //winter