function cartesianProduct(arr: number[]): number[][] {
	// Base case: If the array is empty, return an array with an empty array
	if (arr.length === 0) return [[]];

	// Recursive case: Generate all combinations
	const result: number[][] = [];
	const subarrays = cartesianProduct(arr.slice(1));

	for (let i = 0; i < arr[0]; i++) {
		for (const subarray of subarrays) {
			result.push([i].concat(subarray));
		}
	}

	return result;
}

export function generateVariationArray<
	T extends Record<string, readonly unknown[]>,
>(
	variations: T,
	additionalVariations?: { [K in keyof T]: T[K][number] }[],
): { [K in keyof T]: T[K][number] }[] {
	// const keys = Object.keys(variations);
	const arr = Object.entries(variations).map(([_, val]) => val.length);

	const combinations = cartesianProduct(arr).map((combination) => {
		const result: Record<string, unknown> = {};
		Object.entries(variations).forEach(([key, val], index) => {
			result[key] = val[combination[index]] as unknown;
		});
		return result;
	});

	return [...combinations, ...(additionalVariations || [])] as unknown as {
		[K in keyof T]: T[K][number];
	}[];
}
