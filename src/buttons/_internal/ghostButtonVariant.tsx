import { Mode } from "./types";

export function ghostButtonVariant(mode: Mode) {
	if (mode === "gray") {
		return [
			"ring-gray-200 text-gray-50f data-state-active:bg-gray-200 border-gray-200 bg-gray-100",
			"disabled:text-gray-300 disabled:border-gray-200",
			"hover:bg-gray-50",
		];
	}
	if (mode === "destructive") {
		return [
			"ring-error-200 text-error-50f data-state-active:bg-error-50 border-error-300",
			"disabled:text-error-300 disabled:border-error-200",
			"hover:bg-error-50",
		];
	}
	if (mode === "success") {
		return [
			"ring-success-200 text-success-50f data-state-active:bg-success-50 border-success-300",
			"disabled:text-success-300 disabled:border-success-200",
			"hover:bg-success-50",
		];
	}
	if (mode === "warning") {
		return [
			"ring-warning-200 data-state-active:bg-warning-50 text-warning-50f border-warning-300",
			"disabled:text-warning-300 disabled:border-warning-200",
			"hover:bg-warning-50",
		];
	}
	return [
		"ring-primary-200 data-state-active:bg-primary-100 text-primary-50f border-primary-300",
		"disabled:text-primary-300 disabled:border-primary-200",
		"hover:bg-primary-50",
	];
}
