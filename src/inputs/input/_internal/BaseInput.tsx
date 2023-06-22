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
				"grow min-w-[50px] h-11 px-3 text-gray-500 outline-none bg-transparent",
				className,
			)}
			{...rest}
		/>
	);
}
