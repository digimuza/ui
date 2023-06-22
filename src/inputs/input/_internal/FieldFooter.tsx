import { VariantProps, cva } from "class-variance-authority";
import { PropsWithChildren } from "react";

const variants = cva("flex justify-start items-start text-sm ", {
	variants: {
		variant: {
			default: "text-gray-500",
			error: "text-error-500",
		},
		size: {
			sm: "h-9",
			lg: "h-12",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "sm",
	},
});

export type FieldFooter = VariantProps<typeof variants> & {
	className?: string;
};
export function FieldFooter(props: PropsWithChildren<FieldFooter>) {
	const { size, variant, className, children } = props;
	return (
		<div className={variants({ size, variant, className })}>
			<span className="mt-2">{children}</span>
		</div>
	);
}
