import React from "react";
import { cn } from "../../../utils/cn";

export function BaseInput(
	props: React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	>,
) {
	const { className, ...rest } = props;
	return (
		<input
			type="text"
			className={cn(
				"px-3 h-12 grow min-w-[50px] outline-none bg-transparent",
				className,
			)}
			{...rest}
		/>
	);
}
