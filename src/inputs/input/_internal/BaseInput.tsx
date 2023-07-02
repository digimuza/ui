import React, { ForwardedRef, forwardRef } from "react";
import { cn } from "../../../utils/cn";
import { useInputContext } from "./InputContext";

export const BaseInput = forwardRef(
	(
		props: React.DetailedHTMLProps<
			React.InputHTMLAttributes<HTMLInputElement>,
			HTMLInputElement
		>,
		ref: ForwardedRef<HTMLInputElement>,
	) => {
		const { className, onChange, onFocus, ...rest } = props;
		const { name, placeholder, type, setInputValue } = useInputContext();

		return (
			<input
				id={`${name}-input`}
				placeholder={placeholder}
				ref={ref}
				type={type}
				onChange={(e) => {
					onChange?.(e);
					setInputValue(e.target.value);
				}}
				className={cn(
					"grow min-w-[50px] disabled:cursor-not-allowed disabled:opacity-50 h-full px-3 text-gray-500 outline-none bg-transparent",
					className,
				)}
				{...rest}
			/>
		);
	},
);
