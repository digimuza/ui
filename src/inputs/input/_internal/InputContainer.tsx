import { VariantProps, cva } from "class-variance-authority";
import { PropsWithChildren } from "react";
import { cn } from "../../../utils/cn";

const variants = cva(
	"group flex border outline-none relative text-gray-500 h-11 bg-white shadow-sm focus-within:ring-4 rounded-md overflow-hidden justify-between items-center",
	{
		variants: {
			variant: {
				default: "border-gray-300 ring-primary-100 shadow-sm",
				error: "border-error-300 ring-error-100",
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
			<div className={cn("flex flex-wrap w-full", !prefix && "mr-3")}>
				{children}
			</div>
			{suffix}
		</div>
	);
}
