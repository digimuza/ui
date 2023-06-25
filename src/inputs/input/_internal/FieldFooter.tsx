import { PropsWithChildren } from "react";
import { VariantProps, cva } from "../../../utils/cva";
import { useInputContext } from "./InputContext";

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
export function BaseInputFooter(props: PropsWithChildren<FieldFooter>) {
	const { size, variant, className, children } = props;
	return (
		<div className={variants({ size, variant, className })}>{children}</div>
	);
}

export function InputFooter() {
	const { footer, error, description } = useInputContext();
	return (
		<>
			{footer === undefined ? (
				<>
					{error && (
						<BaseInputFooter variant={"error"}>
							<span className="mt-2">
								<>
									{!error && description}
									{error}
								</>
							</span>
						</BaseInputFooter>
					)}
					{!error && description && (
						<BaseInputFooter variant={"default"}>
							<span className="mt-2">{description}</span>
						</BaseInputFooter>
					)}
				</>
			) : (
				footer
			)}
		</>
	);
}
