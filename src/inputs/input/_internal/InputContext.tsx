import { PropsWithChildren, createContext, useContext, useState } from "react";

interface InputContextAsyncValue {
	inputRef: HTMLInputElement | null;
	setInputRef: (ref: HTMLInputElement) => void;
	inputValue: string;
	setInputValue: (value: string) => void;
}

export interface InputContextBaseValue {
	size?: "sm" | "lg";
	label?: string;
	footer?: React.ReactNode;
	description?: string;
	disabled?: boolean;
	name: string;
	type?: "text" | "password" | "email" | "number" | "tel" | "url";
	placeholder?: string;
	error?: string;
}

export type InputContextValue = InputContextBaseValue & InputContextAsyncValue;

const InputContext = createContext<InputContextValue | null>(null);

export function useInputContext() {
	const context = useContext(InputContext);
	if (!context) {
		throw new Error(
			"Input compound components cannot be rendered outside the Input component",
		);
	}
	return context;
}
export function InputContextProvider(
	props: PropsWithChildren<InputContextBaseValue>,
) {
	const { children, ...rest } = props;
	const [inputRef, setInputRef] = useState<HTMLInputElement | null>(null);
	const [inputValue, setInputValue] = useState<string>("");

	return (
		<InputContext.Provider
			value={{ inputValue, setInputValue, inputRef, setInputRef, ...rest }}
		>
			<div className="grow relative">{children}</div>
		</InputContext.Provider>
	);
}
