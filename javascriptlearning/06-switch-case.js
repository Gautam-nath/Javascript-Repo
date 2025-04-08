// 0 Monday
// 1 Tuesday

//..

// 7 Sunday

function dayOfTheWeek(dayNumber) {
    if (dayNumber == 0) {
        console.log("Monday");

    }
    if (dayNumber == 1) {
        console.log("Tuesday");

    }
    if (dayNumber == 2) {
        console.log("Wednesday");

    }
    if (dayNumber == 3) {
        console.log("Thursday");

    }
    if (dayNumber == 4) {
        console.log("Friday");

    }
    if (dayNumber == 5) {
        console.log("Saturday");

    }
    if (dayNumber == 6) {
        console.log("Sunday");

    }


}
dayOfTheWeek(0);
dayOfTheWeek(6);


//Switch Case
function dayOfTheWeek(dayNumber) {
    switch (dayNumber) {
        case 0:
            console.log("Monday");
            break;
        case 1:
            console.log("Tuesday");
            break;
        case 2:
            console.log("Wednesday");
           break;
        case 3:
            console.log("Thursday");
            break;
        case 4:
            console.log("Friday");
            break;
        case 5:
            console.log("Saturday");
            break;
        case 6:
            console.log("Sunday");
            break;

        default:
            console.log("Invalid Day Number:", dayNumber);

            break;
   }
}
dayOfTheWeek(0);
dayOfTheWeek(6);
dayOfTheWeek(10);
