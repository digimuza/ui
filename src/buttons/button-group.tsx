import { useEffect, useState } from "react";
import { cn } from "..";
import { alterProps } from "../utils/props";
import { Button } from "./button";

export function ButtonGroup(props: {
	children: React.ReactNode;
	defaultActive?: string;
	variant?: Exclude<Button["variant"], "link">;
	active?: string;
	isFluid?: boolean;
	mode?: Button["mode"];
	disabled?: boolean;
	size?: Button["size"];
	onActiveChange?: (value?: string) => void;
}) {
	const {
		children,
		defaultActive,
		onActiveChange,
		variant = "ghost",
		isFluid,
		disabled,
		mode = "gray",
		active: controlledActive,
		size,
	} = props;
	const [active, setActive] = useState<string | undefined>(
		defaultActive ?? undefined,
	);

	useEffect(() => {
		onActiveChange?.(active);
	}, [onActiveChange, active]);

	const alteredChildren = alterProps<Button>(
		children,
		(childProps, index, arr) => {
			const activeState =
				childProps.value != null &&
				childProps.value === (controlledActive ?? active)
					? {
							"data-state": "active",
					  }
					: {};
			return {
				variant: variant,
				mode: mode,
				disabled,
				size: size,
				...activeState,
				...childProps,
				onClick: (event) => {
					const val = childProps?.value;
					if (typeof val !== "string") return;
					setActive(val);
					childProps.onClick?.(event);
				},
				_focus: "inset",
				_rounding:
					index === 0 ? "left" : index === arr.length - 1 ? "right" : "none",
			};
		},
	);

	return (
		<div className={cn("inline-flex space-x-[1px]", isFluid && "w-full")}>
			{alteredChildren}
		</div>
	);
}
