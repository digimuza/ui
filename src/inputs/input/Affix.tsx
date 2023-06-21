import { VariantProps, cva } from "class-variance-authority";
import { PropsWithChildren } from "react";

const variants = cva(
	"flex justify-center items-center text-gray-500 self-stretch",
	{
		variants: {
			variant: {
				bordered: "px-3 bg-gray-200 border-r border-gray-300",
				empty: "pl-3 py-3 text-gray-500",
			},
		},
		defaultVariants: {
			variant: "empty",
		},
	},
);

export type Affix = VariantProps<typeof variants> & {
	className?: string;
};
export function Affix(props: PropsWithChildren<Affix>) {
	const { children, className, variant } = props;
	return <div className={variants({ className, variant })}>{children}</div>;
}
