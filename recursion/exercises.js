export const numbersDown = (fn, n) => {
	fn(n);

	if (n === 0) {
		return;
	}

	return numbersDown(fn, n - 1);
};

export const exponential = (base, expo) => {
	if (expo === 1) {
		return base;
	}

	return base * exponential(base, expo - 1);
};

export const multiplyArrayValues = (array, value) => {
	if (array.length === 0) return [];

	return [array[0] * value, ...multiplyArrayValues(array.slice(1), value)];
};

export const reverseArray = (array) => {
	if (array.length === 0) return [];

	return [...reverseArray(array.slice(1)), array[0]];
};

export const factorial = (n) => {
	if (n === 1) {
		return 1;
	}

	return n * factorial(n - 1);
};

export const fibonacci = (n) => {
	if (n === 0) {
		return 0;
	}

	if (n === 1) {
		return 1;
	}

	return fibonacci(n - 1) + fibonacci(n - 2);
};

export const flatten1 = (value) => {
	if (Array.isArray(value)) {
		return value.reduce((array, currentValue) => {
			if (Array.isArray(currentValue)) {
				return [...array, ...flatten(currentValue)];
			} else {
				return [...array, currentValue];
			}
		}, []);
	}
};
// improved version
export const flatten = (value) => {
	if (Array.isArray(value)) {
		if (value.length === 0) return [];

		return [...flatten(value[0]), ...flatten(value.slice(1))];
	}

	return [value];
};
