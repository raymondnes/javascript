// .reduce() function

// The .reduce() method iterates through an array and returns a single value. In the above code example, the .reduce() method will sum up all the elements of the array. It takes a callback function with two parameters (accumulator, currentValue) as arguments. On each iteration, accumulator is the value returned by the last iteration, and the currentValue is the current element. Optionally, a second argument can be passed which acts as the initial value of the accumulator.


	const arrayOfNumbers = [1, 2, 3, 4];
	const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;});
	console.log(sum); 

// Prints: 10
