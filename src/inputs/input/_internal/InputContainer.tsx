import { VariantProps, cva } from "class-variance-authority";
import { PropsWithChildren } from "react";

const variants = cva(
	"group flex border border-gray-300 shadow-sm focus-within:ring-2 rounded-lg overflow-hidden justify-between items-center",
	{
		variants: {
			variant: {
				default: "border-gray-300",
				error: "border-red-300 ",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

export type InputContainer = {
	prefix?: React.ReactNode;
	suffix?: React.ReactNode;
	className?: string;
} & VariantProps<typeof variants>;
export function InputContainer(props: PropsWithChildren<InputContainer>) {
	const { children, className, prefix, suffix, variant } = props;
	return (
		<div
			className={variants({
				className,
				variant,
			})}
		>
			{prefix}
			<div className="flex flex-wrap w-full">{children}</div>
			{suffix}
		</div>
	);
}
