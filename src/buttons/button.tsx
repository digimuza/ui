import { VariantProps, cva } from "class-variance-authority";
import { Icon } from "../icons/base";
import { generateVariationArray } from "../utils/cartesianProduct";
import { cn } from "../utils/cn";
type Mode = "default" | "destructive" | "gray" | "success" | "warning";

function primaryButtonVariant(mode: Mode) {
	if (mode === "gray") {
		return [
			"bg-gray-600 ring-gray-200 text-gray-600f border-gray-600",
			"disabled:bg-gray-200 disabled:border-gray-200",
			"enabled:hover:bg-gray-700",
		];
	}
	if (mode === "success") {
		return [
			"bg-success-600 ring-success-200 text-success-600f border-success-600",
			"disabled:bg-success-200 disabled:border-success-200",
			"enabled:hover:bg-success-700",
		];
	}
	if (mode === "warning") {
		return [
			"bg-warning-600 ring-warning-200 text-warning-600f border-warning-600",
			"disabled:bg-warning-200 disabled:border-warning-200",
			"enabled:hover:bg-warning-700",
		];
	}
	if (mode === "destructive") {
		return [
			"bg-error-600 ring-error-200 text-error-600f border-error-600",
			"disabled:bg-error-300 disabled:border-error-200",
			"enabled:hover:bg-error-700",
		];
	}
	return [
		"bg-primary-600 ring-primary-200 text-primary-600f border-primary-600",
		"disabled:bg-primary-200 disabled:border-primary-200",
		"enabled:hover:bg-primary-700",
	];
}

function secondaryButtonVariant(mode: Mode) {
	if (mode === "gray") {
		return [
			"bg-gray-50 ring-gray-200 text-gray-50f border-gray-50",
			"disabled:bg-gray-25 disabled:text-gray-300 disabled:border-gray-25",
			"hover:bg-gray-100",
		];
	}
	if (mode === "destructive") {
		return [
			"bg-error-50 ring-error-200 text-error-50f border-error-50",
			"disabled:bg-error-25 disabled:text-error-300 disabled:border-error-25",
			"hover:bg-error-100",
		];
	}
	if (mode === "success") {
		return [
			"bg-success-50 ring-success-200 text-success-50f border-success-50",
			"disabled:bg-success-25 disabled:text-success-300 disabled:border-success-25",
			"hover:bg-success-100",
		];
	}
	if (mode === "warning") {
		return [
			"bg-warning-50 ring-warning-200 text-warning-50f border-warning-50",
			"disabled:bg-warning-25 disabled:text-warning-300 disabled:border-warning-25",
			"hover:bg-warning-100",
		];
	}
	return [
		"bg-primary-50 ring-primary-200 text-primary-50f border-primary-50",
		"disabled:bg-primary-25 disabled:text-primary-300 disabled:border-primary-25",
		"hover:bg-primary-100",
	];
}

function ghostButtonVariant(mode: Mode) {
	if (mode === "gray") {
		return [
			"ring-gray-200 text-gray-50f border-gray-300",
			"disabled:text-gray-300 disabled:border-gray-200",
			"hover:bg-gray-50",
		];
	}
	if (mode === "destructive") {
		return [
			"ring-error-200 text-error-50f border-error-300",
			"disabled:text-error-300 disabled:border-error-200",
			"hover:bg-error-50",
		];
	}
	if (mode === "success") {
		return [
			"ring-success-200 text-success-50f border-success-300",
			"disabled:text-success-300 disabled:border-success-200",
			"hover:bg-success-50",
		];
	}
	if (mode === "warning") {
		return [
			"ring-warning-200 text-warning-50f border-warning-300",
			"disabled:text-warning-300 disabled:border-warning-200",
			"hover:bg-warning-50",
		];
	}
	return [
		"ring-primary-200 text-primary-50f border-primary-300",
		"disabled:text-primary-300 disabled:border-primary-200",
		"hover:bg-primary-50",
	];
}

function linkButtonVariant(mode: Mode) {
	if (mode === "gray") {
		return ["text-gray-700 disabled:text-gray-300 hover:text-gray-900"];
	}
	if (mode === "destructive") {
		return ["text-error-700 disabled:text-error-300 hover:text-error-900"];
	}
	if (mode === "success") {
		return [
			"text-success-700 disabled:text-success-300 hover:text-success-900",
		];
	}
	if (mode === "warning") {
		return [
			"text-warning-700 disabled:text-warning-300 hover:text-warning-900",
		];
	}
	return ["text-primary-700 disabled:text-primary-300 hover:text-primary-900"];
}

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
	"inline-flex items-center transition-all cursor-pointer justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background",
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
				ghost: ["bg-white", "enabled:active:ring-2 rounded-md"],
				link: [],
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
		iconRight,
		text,
		...rest
	} = props;
	return (
		<button
			type={type}
			{...rest}
			className={cn(variants({ variant, size, className, mode }))}
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
	);
}
