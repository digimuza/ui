import React from "react";
import { cn } from "../../../utils/cn";
import { useInputContext } from "./InputContext";

export function BaseInput(
	props: React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	>,
) {
	const { className, onChange, ...rest } = props;
	const { setInputRef, name, placeholder, type, setInputValue } =
		useInputContext();
	return (
		<input
			id={`${name}-input`}
			placeholder={placeholder}
			ref={setInputRef}
			type={type}
			onChange={(e) => {
				onChange?.(e);
				setInputValue(e.target.value);
			}}
			className={cn(
				"grow min-w-[50px] h-full px-3 text-gray-500 outline-none bg-transparent",
				className,
			)}
			{...rest}
		/>
	);
}
