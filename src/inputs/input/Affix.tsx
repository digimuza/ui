import { ForwardedRef, PropsWithChildren, forwardRef } from "react";
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

export const AffixButton = forwardRef(
	(
		props: Button & { position?: "left" | "right" },
		ref: ForwardedRef<HTMLButtonElement>,
	) => {
		const { position, ...rest } = props;
		return (
			<Affix position={props.position}>
				<Button {...rest} ref={ref} type={"button"} />
			</Affix>
		);
	},
);
