import { AssertionError } from "assert";

function assertIsNumber(value: any): asserts value is number {
	if (typeof value !== "number") {
		throw new AssertionError({
			message: `Expected ${value} to be a number.`,
		});
	}
};

const assertIsNumberBroken = (value: any): asserts value is number  => {
	if (typeof value !== "number") {
		throw new AssertionError({
			message: `Expected ${value} to be a number.`,
		});
	}
};

function double(input: any): number {
	assertIsNumber(input);
	assertIsNumberBroken(input);
	return input * 2;
};
