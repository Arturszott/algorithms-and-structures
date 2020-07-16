import {
	numbersDown,
	exponential,
	multiplyArrayValues,
	reverseArray,
	factorial,
	fibonacci,
	flatten
} from '../recursion/exercises.js';

numbersDown(console.log, 2);

numbersDown((n) => console.log('Oh my n: ' + n), 3);

console.log(exponential(2, 5));

console.log(multiplyArrayValues([1, 1, 1, 2], 3));

console.log(reverseArray([1, 2, 3, 4]));

console.log(factorial(5));

console.log(fibonacci(7));
console.log(fibonacci(9));
console.log(fibonacci(1));
console.log(fibonacci(0));
console.log(flatten([1, [2], [3, [[4]]]]));
