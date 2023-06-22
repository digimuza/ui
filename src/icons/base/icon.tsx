import { VariantProps, cva } from "class-variance-authority";
import { PropsWithChildren } from "react";
import { cn } from "../../utils/cn";

const variants = cva("flex justify-center items-center", {
	variants: {
		size: {
			xs: "min-h-[12px] min-w-[12px]",
			sm: "min-h-[16px] min-w-[16px]",
			md: "min-h-[20px] min-w-[20px]",
			lg: "min-h-[24px] min-w-[24px]",
			xl: "min-h-[28px] min-w-[28px]",
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
