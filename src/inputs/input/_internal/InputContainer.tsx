import { AlertCircle } from "@digimuza/icons/base";
import { cva } from "class-variance-authority";
import {
	PropsWithChildren,
	ReactNode,
	cloneElement,
	isValidElement,
} from "react";
import { cn } from "../../../utils/cn";
import { Affix } from "../Affix";
import { useInputContext } from "./InputContext";

const variants = cva(
	"group flex border outline-none relative text-gray-500 h-11 bg-white shadow-sm rounded-lg overflow-hidden justify-between items-center",
	{
		variants: {
			focus: {
				default: "focus-within:ring-4 active:ring-4",
				outOfFocus: "",
				inFocus: "ring-4",
			},
			variant: {
				default: "border-gray-300 ring-primary-100 shadow-sm",
				error: "border-error-300 ring-error-100",
			},
			size: {
				xs: "h-9",
				sm: "h-10",
				md: "h-11",
				lg: "h-12",
				xl: "h-14",
			},
		},
		defaultVariants: {
			focus: "default",
			variant: "default",
			size: "md",
		},
	},
);

export type InputContainer = {
	className?: string;
	suffix?: React.ReactNode | React.ReactNode[];
	prefix?: React.ReactNode | React.ReactNode[];
};

export function addAdditionalProps(
	node: ReactNode | React.ReactNode[] | undefined | null,
	props: Record<string, unknown>,
) {
	if (node === undefined || node === null) return null;

	const items = Array.isArray(node) ? node : [node];

	return (
		<>
			{items.map((child) => {
				if (isValidElement(child)) {
					// rome-ignore lint/suspicious/noExplicitAny: <explanation>
					return cloneElement(child, props as any);
				}
				return child;
			})}
		</>
	);
}

export function InputContainer(props: PropsWithChildren<InputContainer>) {
	const { children, className, prefix, suffix } = props;
	const { error, size, isFocused } = useInputContext();

	const clonedPrefix = addAdditionalProps(prefix, { position: "left" });
	const clonedSuffix = addAdditionalProps(suffix, { position: "right" });
	return (
		<div
			className={variants({
				className,
				size: size,
				focus:
					isFocused == null ? "default" : isFocused ? "inFocus" : "outOfFocus",
				variant: error ? "error" : "default",
			})}
		>
			{clonedPrefix}
			<div className={cn("flex h-full flex-wrap w-full")}>{children}</div>
			{error && <Affix className="text-error-500" icon={<AlertCircle />} />}
			{clonedSuffix}
		</div>
	);
}
