import { Mode } from "./types";

export function primaryButtonVariant(mode: Mode) {
	if (mode === "gray") {
		return [
			"bg-gray-600 ring-gray-200 text-gray-600f border-gray-600",
			"disabled:bg-gray-200 disabled:border-gray-200",
			"enabled:hover:bg-gray-700",
		];
	}
	if (mode === "success") {
		return [
			"bg-success-600 ring-success-200 text-success-600f border-success-600",
			"disabled:bg-success-200 disabled:border-success-200",
			"enabled:hover:bg-success-700",
		];
	}
	if (mode === "warning") {
		return [
			"bg-warning-600 ring-warning-200 text-warning-600f border-warning-600",
			"disabled:bg-warning-200 disabled:border-warning-200",
			"enabled:hover:bg-warning-700",
		];
	}
	if (mode === "destructive") {
		return [
			"bg-error-600 ring-error-200 text-error-600f border-error-600",
			"disabled:bg-error-300 disabled:border-error-200",
			"enabled:hover:bg-error-700",
		];
	}
	return [
		"bg-primary-600 ring-primary-200 text-primary-600f border-primary-600",
		"disabled:bg-primary-200 disabled:border-primary-200",
		"enabled:hover:bg-primary-700",
	];
}
