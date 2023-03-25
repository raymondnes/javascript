// The .map() method

/*
 The .map() method executes a callback function on each element in an array. It returns a new arraymade up of the return values from the callback function.
 The original array does not get altered, and the returned array may contain different elements than the original array.
 In the example code above, the .map() method is used to add ' joined the contest.' string at the end of each element in the finalParticipants array.
*/


	const finalParticipants = ['Taylor',
	'Donald', 'Don', 'Natasha', 'Bobby'];

// add string after each final participant

	const announcements = finalParticipants.map(member => {
	return member + ' joined the contest.';})
	console.log(announcements);

// prints: 
/*
 * [
  'Taylor joined the contest.',
  'Donald joined the contest.',
  'Don joined the contest.',
  'Natasha joined the contest.',
  'Bobby joined the contest.'
   ]
*/


	const nmcProcessingOfficers = ['Raymond', 'Areeb', 'Riya', 'Henry', 'Aparna'];

// add string after each final participant

	const welcomeAddress = nmcProcessingOfficers.map(nmcProcessingOfficers => {
        return nmcProcessingOfficers + ' has hit his monthly target, CONGRATULATIONS!!!'})
        console.log(welcomeAddress);

// Prints:
/* [
  'Raymond has hit his monthly target, CONGRATULATIONS!!!',
  'Areeb has hit his monthly target, CONGRATULATIONS!!!',
  'Riya has hit his monthly target, CONGRATULATIONS!!!',
  'Henry has hit his monthly target, CONGRATULATIONS!!!',
  'Aparna has hit his monthly target, CONGRATULATIONS!!!'
   ]
 */
