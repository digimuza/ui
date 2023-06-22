import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { Icon } from "../icons/base";
import { Tooltip } from "../tooltip/tooltip";
import { generateVariationArray } from "../utils/cartesianProduct";
import { cn } from "../utils/cn";
import { ghostButtonVariant } from "./_internal/ghostButtonVariant";
import { linkButtonVariant } from "./_internal/linkButtonVariant";
import { primaryButtonVariant } from "./_internal/primaryButtonVariant";
import { secondaryButtonVariant } from "./_internal/secondaryButtonVariant";

const combinations = generateVariationArray({
	variant: ["primary", "secondary", "ghost", "link"] as const,
	mode: ["default", "gray", "destructive", "success", "warning"] as const,
}).map(({ mode, variant }) => {
	if (variant === "primary") {
		return {
			variant,
			mode,
			className: primaryButtonVariant(mode),
		};
	}
	if (variant === "secondary") {
		return {
			variant,
			mode,
			className: secondaryButtonVariant(mode),
		};
	}
	if (variant === "ghost") {
		return {
			variant,
			mode,
			className: ghostButtonVariant(mode),
		};
	}
	return {
		variant,
		mode,
		className: linkButtonVariant(mode),
	};
});

const variants = cva(
	"inline-flex items-center transition-all cursor-pointer justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background",
	{
		compoundVariants: combinations,
		variants: {
			mode: {
				gray: true,
				destructive: true,
				success: true,
				warning: true,
				default: true,
			},
			variant: {
				primary: ["enabled:active:ring-2 border rounded-md"],
				secondary: ["enabled:active:ring-2 border rounded-md"],
				ghost: [
					"bg-white",
					"enabled:active:ring-2 rounded-md focus-visible:ring-0",
				],
				link: [
					"focus-visible:ring-0 focus-visible:outline -outline-offset-[5px] outline-1 outline-primary-100",
				],
			},
			size: {
				xs: "h-9 px-3 text-sm space-x-2",
				sm: "h-10 px-4 text-sm space-x-2",
				md: "h-11 px-5 text-md space-x-3",
				lg: "h-12 px-8 text-md space-x-3",
				xl: "h-14 px-12 text-md space-x-3",
			},
		},
		defaultVariants: {
			variant: "primary",
			mode: "default",
			size: "md",
		},
	},
);
export type Button = React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof variants> & {
		icon?: React.ReactNode;
		iconLeft?: React.ReactNode;
		iconRight?: React.ReactNode;
		text?: string;
		loading?: boolean;
		tooltip?: React.ReactNode;
	};

export function Button(props: Button) {
	const {
		className,
		type,
		children,
		variant,
		size,
		icon,
		mode,
		iconLeft,
		loading,
		disabled,
		iconRight,
		text,
		tooltip,
		...rest
	} = props;
	return (
		<Tooltip content={tooltip}>
			<button
				type={type}
				disabled={disabled || loading}
				{...rest}
				className={cn(
					variants({
						variant,
						size,
						className: cn(!!icon && "shrink aspect-square p-0"),
						mode,
					}),
				)}
			>
				{!children && (
					<>
						{icon && <Icon size={size}>{icon}</Icon>}
						{!icon && (
							<>
								{iconLeft && <Icon size={size}>{iconLeft}</Icon>}
								{text && <span>{text}</span>}
								{iconRight && <Icon size={size}>{iconRight}</Icon>}
							</>
						)}
					</>
				)}
				{children}
			</button>
		</Tooltip>
	);
}
