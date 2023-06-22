import { PropsWithChildren } from "react";
import { Button } from "../../buttons/button";
import { Icon } from "../../icons/base";
import { cn } from "../../utils/cn";

export type Affix = {
	className?: string;
	icon?: React.ReactNode;
	bordered?: boolean;
	position?: "left" | "right";
};
export function Affix(props: PropsWithChildren<Affix>) {
	const { children, className, bordered = true, icon, position } = props;
	return (
		<span
			className={cn(
				"h-full flex justify-center text-xs items-center",
				bordered && position === "left" && "border-r",
				bordered && position === "right" && "border-l",
				className,
			)}
		>
			{children}
			{!children && icon && <Icon className="mx-3">{icon}</Icon>}
		</span>
	);
}

export function AffixButton(props: Button & { position?: "left" | "right" }) {
	return (
		<Affix position={props.position}>
			<Button {...props} type={"button"} />
		</Affix>
	);
}
