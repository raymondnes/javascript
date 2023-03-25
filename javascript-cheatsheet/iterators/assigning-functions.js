// 	Assigning Function

// In JavaScript, functions are a data type just as strings, numbers, and arrays are data types. Therefore, functions can be assigned as values to variables, but are different from all other data types because they can be invoked.



	let plusFive = (number) => {
	return number + 5;};

// f is assigned the value of plusFive
	
	let f = plusFive;

	console.log(plusFive(3)); // 8

// Since f has a function value, it can be invoked.
	
	console.log(f(9)); // 14
