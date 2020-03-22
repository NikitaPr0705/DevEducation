let numberOfWeekDays = [1, 2, 3, 4, 5, 6, 7];

function getWeekDay(number) {
    switch (number) {
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
        case 7:
            return "Sunday";
            break;
        default:
            return "Error";
    };
};

getWeekDay(2);