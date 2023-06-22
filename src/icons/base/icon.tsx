import { VariantProps, cva } from "class-variance-authority";
import { PropsWithChildren } from "react";
import { cn } from "../../utils/cn";

const variants = cva("", {
	variants: {
		size: {
			xs: "h-3 w-3",
			sm: "h-3 w-3",
			md: "h-4 w-4",
			lg: "h-4 w-4",
			xl: "h-5 w-5",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export type Icon = VariantProps<typeof variants> & { className?: string };

export const Icon = (props: PropsWithChildren<Icon>) => {
	const { children, className, size } = props;
	return <i className={cn(variants({ className, size }))}>{children}</i>;
};
