class Stack {
	constructor(capacity = Infinity) {
		this.storage = {};
		this.length = 0;
		this.min = -Infinity;
		this.capacity = capacity;
	}

	push(value) {
		if (this.length === this.capacity) {
			throw new Error('Max capacity already reached. Remove element before adding a new one.');
		}
		this.length = this.length + 1;
		this.storage[this.length] = value;
		this.min = value > this.min ? value : this.min;
	}

	pop() {
		if (this.length > 0) {
			const element = this.peek();

			delete this.storage[this.length];
			this.length = this.length - 1;

			return element;
		} else {
			throw new Error('Cannot remove more elements, Stack is empty');
		}
	}

	contains(value) {
		return Object.values(this.storage).some((item) => item === value);
	}

	peek() {
		return this.storage[this.length];
	}

	until(value) {
		for (let i = this.length; i >= 0; i--) {
			if (this.storage[i] === value) {
				return i + 1;
			}
		}
	}

	count() {
		return this.length;
	}

	min() {
		return this.min;
	}

	sort() {
		this.storage = Object.fromEntries(
			Object.entries(this.storage)
				.sort((a, b) => {
					return a[1] - b[1];
				})
				.map((entry, i) => {
					return [i + 1, entry[1]];
				})
		);

		return this.storage;
	}
}

export default Stack;
