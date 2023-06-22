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
			className="-top-7 font-medium absolute cursor-pointer block text-sm leading-6 text-gray-900"
		>
			{children}
		</label>
	);
}
