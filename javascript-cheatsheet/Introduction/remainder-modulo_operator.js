// The remainder operator, sometimes called modulo, returns the number that remains after the right-hand number divides into the left-hand number as many times as it evenly can.


// calculates # of weeks in a year, rounds down to nearest integer

	const weeksInYear = Math.floor(365/7);

// calcuates the number of days left over after 365 is divded by 7

	const daysLeftOver = 365 % 7 ;
	console.log("A year has " + weeksInYear + " weeks and " + daysLeftOver + " days");


// calculates the number of hours in a day
        const hoursInADay = 24 / 1 ;

// calculates the number of minutes in a day
        const minutesInADay = 24 * 60 ;
        console.log("A day has " + hoursInADay + " hours " + "and " + minutesInADay + " minutes.");
