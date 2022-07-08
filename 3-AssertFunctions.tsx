function assertIsNumber(value: any): asserts value is number {
	if (typeof value !== "number") {
		throw new Error(`Expected ${value} to be a number.`);
	}
};

const assertIsNumberBroken: (value: any) => asserts value is number = (value: any): asserts value is number  => {
	if (typeof value !== "number") {
		throw new Error(`Expected ${value} to be a number.`);
	}
};

function double(input: any): number {
	assertIsNumber(input);
	assertIsNumberBroken(input);
	return input * 2;
};
