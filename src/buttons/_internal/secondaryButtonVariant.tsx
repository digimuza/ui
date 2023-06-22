import { Mode } from "./types";

export function secondaryButtonVariant(mode: Mode) {
	if (mode === "gray") {
		return [
			"bg-gray-50 ring-gray-200 text-gray-50f border-gray-50",
			"disabled:bg-gray-25 disabled:text-gray-300 disabled:border-gray-25",
			"hover:bg-gray-100",
		];
	}
	if (mode === "destructive") {
		return [
			"bg-error-50 ring-error-200 text-error-50f border-error-50",
			"disabled:bg-error-25 disabled:text-error-300 disabled:border-error-25",
			"hover:bg-error-100",
		];
	}
	if (mode === "success") {
		return [
			"bg-success-50 ring-success-200 text-success-50f border-success-50",
			"disabled:bg-success-25 disabled:text-success-300 disabled:border-success-25",
			"hover:bg-success-100",
		];
	}
	if (mode === "warning") {
		return [
			"bg-warning-50 ring-warning-200 text-warning-50f border-warning-50",
			"disabled:bg-warning-25 disabled:text-warning-300 disabled:border-warning-25",
			"hover:bg-warning-100",
		];
	}
	return [
		"bg-primary-50 ring-primary-200 text-primary-50f border-primary-50",
		"disabled:bg-primary-25 disabled:text-primary-300 disabled:border-primary-25",
		"hover:bg-primary-100",
	];
}
