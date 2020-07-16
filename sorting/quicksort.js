const qs = (arr) => {
	if (arr.length < 2) {
		return arr;
	}

	const smaller = [];
	const bigger = [];
	const mid = Math.ceil(arr.length / 2);

	for (let i = 0; i < arr.length; i++) {
		if (i !== mid) {
			if (arr[i] <= arr[mid]) {
				smaller.push(arr[i]);
			} else {
				bigger.push(arr[i]);
			}
		}
	}

	return [...qs(smaller), arr[mid], ...qs(bigger)];
};

export default qs;
