import { Mode } from "./types";

export function linkButtonVariant(mode: Mode) {
	if (mode === "gray") {
		return ["text-gray-700 disabled:text-gray-300 hover:text-gray-900"];
	}
	if (mode === "destructive") {
		return ["text-error-700 disabled:text-error-300 hover:text-error-900"];
	}
	if (mode === "success") {
		return [
			"text-success-700 disabled:text-success-300 hover:text-success-900",
		];
	}
	if (mode === "warning") {
		return [
			"text-warning-700 disabled:text-warning-300 hover:text-warning-900",
		];
	}
	return ["text-primary-700 disabled:text-primary-300 hover:text-primary-900"];
}
