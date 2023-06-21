import React from "react";

export function Label({
	children,
	...rest
}: React.DetailedHTMLProps<
	React.LabelHTMLAttributes<HTMLLabelElement>,
	HTMLLabelElement
>) {
	return (
		<label
			{...rest}
			className="cursor-pointer block text-sm leading-6 text-gray-900"
		>
			{children}
		</label>
	);
}
