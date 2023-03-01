function daysInMonth(month, year){

    let days = new Date(year, month, 0).getDate()
    console.log(days)


}

daysInMonth(12, 2012)