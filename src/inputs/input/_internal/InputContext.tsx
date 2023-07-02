import React, {
	PropsWithChildren,
	createContext,
	useContext,
	useState,
} from "react";

interface InputContextAsyncValue {
	inputValue: string;
	setInputValue: (value: string) => void;
}

export interface InputContextBaseValue {
	size?: "sm" | "lg";
	label?: React.ReactNode;
	footer?: React.ReactNode;
	description?: string;
	isDisabled?: boolean;
	isFocused?: boolean;
	name: string;
	type?: "text" | "password" | "email" | "number" | "tel" | "url";
	placeholder?: string;
	error?: React.ReactNode;
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
	const [inputValue, setInputValue] = useState<string>("");

	return (
		<InputContext.Provider value={{ inputValue, setInputValue, ...rest }}>
			<div className="grow relative">{children}</div>
		</InputContext.Provider>
	);
}
