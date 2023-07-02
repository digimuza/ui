import { VariantProps, cva } from "class-variance-authority";
import { cn } from "..";

const variants = cva(
	"inline-flex max-w-fit shrink items-center justify-center items-center rounded-lg text-white px-2 py-1 text-xs font-medium",
	{
		variants: {
			variant: {
				success: ["bg-success-500"],
				error: ["bg-error-500"],
				warning: ["bg-warning-500"],
				info: ["bg-blue-500"],
				gray: ["bg-gray-900 text-gray-900f"],
			},
		},
		defaultVariants: {
			variant: "success",
		},
	},
);

export type Badge = React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof variants> & {};

export function Badge(props: Badge) {
	const { variant } = props;
	return (
		<span
			className={cn(
				variants({
					variant,
				}),
			)}
		>
			{props.children}
		</span>
	);
}
