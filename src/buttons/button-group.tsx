import { useEffect, useState } from "react";
import { cn } from "..";
import { alterProps } from "../utils/props";
import { Button } from "./button";

export function ButtonGroup(props: {
	children: React.ReactNode;
	defaultActive?: Button["value"];
	variant?: Exclude<Button["variant"], "link">;
	active?: Button["value"];
	isFluid?: boolean;
	mode?: Button["mode"];
	disabled?: boolean;
	size?: Button["size"];
	onActiveChange?: (value: Button["value"]) => void;
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
	const [active, setActive] = useState<Button["value"]>(
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
					setActive(childProps?.value);
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
