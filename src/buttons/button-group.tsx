import { useEffect, useState } from "react";
import { alterProps } from "../utils/props";
import { Button } from "./button";

export function ButtonGroup(props: {
	children: React.ReactNode;
	defaultActive?: Button["value"];
	variant?: Exclude<Button["variant"], "link">;
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
		disabled,
		mode = "gray",
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
				childProps.value != null && childProps.value === active
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

	return <div className="inline-flex space-x-[1px]">{alteredChildren}</div>;
}