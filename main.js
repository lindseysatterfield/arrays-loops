// ***** ARRAYS *****
const students = [
	'Katy',
	'Jackie',
	'Sean',
	'Nathan'
];
// console.log(students.length);

// ***** ACCESSING ITEMS IN ARRAY *****

// console.log(students[1]);
// console.log(students[students.length - 1]); // Nathan // will give you the end of the index

students[0] = 'Matthew';
// console.log(students);

const valuePrinter = (array, index) => {
	return array[index];
};

// console.log(valuePrinter(students, 2));

const isGregHere = (array) => {
	return array.includes('Greg');
};
// console.log(isGregHere(students)); // returns false because Greg is not in the students array
