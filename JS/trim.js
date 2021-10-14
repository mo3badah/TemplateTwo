var avDay = prompt("What Is The Day You will available");
avDay = avDay.trim();
avDay = avDay.toUpperCase();
switch (avDay) {
    case "FRIDAY":
    case "SATURDAY":
    case "SUNDAY":
        console.log("No Available Appointments");
        break;
    case "MONDAY":
    case "THURSDAY":
        console.log("From 10:00 AM To 5:00 PM");
        break;
    case "TUESDAY":
        console.log("From 10:00 AM To 6:00 PM");
        break;
    case "WEDNESDAY":
        console.log("From 10:00 AM To 7:00 PM");
        break;
    default:
        console.log("Its Not A Valid Day");
        break;
}
