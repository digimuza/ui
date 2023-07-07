import { VariantProps, cva } from "class-variance-authority";
import React, { ForwardedRef, forwardRef } from "react";
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
	"inline-flex border items-center transition-all cursor-pointer justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background",
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
			_rounding: {
				default: "rounded-lg",
				none: "",
				left: "rounded-l-lg",
				right: "rounded-r-lg",
			},

			_focus: {
				default: "enabled:active:ring-4 enable:focus-visible:ring-4",
				inset: "enabled:active:-ring-2 enable:focus-visible:ring-4",
			},
			variant: {
				primary: [],
				secondary: [],
				ghost: ["enabled:active:ring-0 focus-visible:ring-0"],
				link: [
					"focus-visible:ring-0 border-transparent focus-visible:outline -outline-offset-[5px] outline-1 outline-primary-100",
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
			_focus: "default",
			_rounding: "default",
			variant: "primary",
			mode: "default",
			size: "md",
		},
	},
);
export type Button = Omit<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	"value"
> &
	VariantProps<typeof variants> & {
		icon?: React.ReactNode;
		iconLeft?: React.ReactNode;
		iconRight?: React.ReactNode;
		text?: string;
		loading?: boolean;
		value?: string;
		tooltip?: React.ReactNode;
	};

export const Button = forwardRef(
	(props: Button, ref: ForwardedRef<HTMLButtonElement>) => {
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
			// These are private
			_focus,
			_rounding,
			tooltip,
			...rest
		} = props;
		return (
			<Tooltip content={tooltip}>
				<button
					ref={ref}
					type={type}
					disabled={disabled || loading}
					{...rest}
					className={cn(
						variants({
							_rounding,
							_focus,
							variant,
							size,
							className: cn(!!icon && "shrink aspect-square p-0", className),
							mode,
						}),
					)}
				>
					<>
						{icon && <Icon size={size}>{icon}</Icon>}
						{!icon && (
							<>
								{iconLeft && <Icon size={size}>{iconLeft}</Icon>}
								{text ? <span>{text}</span> : <span>{children}</span>}
								{iconRight && <Icon size={size}>{iconRight}</Icon>}
							</>
						)}
					</>
				</button>
			</Tooltip>
		);
	},
);
