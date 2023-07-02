import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren, useRef } from "react";
import { TooltipSettingsProvider } from "../../tooltip/tooltip";
import { cn } from "../../utils/cn";
function LayoutDashboardColumn(props: {
	children: React.ReactNode;
	width?: string | number;
	open: boolean;
	index: number;
	className?: string;
}) {
	const intial = useRef(props.open);
	const { className } = props;
	return (
		<motion.div
			variants={{
				closed: {
					width: 0,
				},
				open: {
					// width: props.width ?? "100%",
				},
			}}
			initial={intial.current ? "open" : "closed"}
			animate={props.open ? "open" : "closed"}
			style={{
				zIndex: props.index,
			}}
			transition={{
				delay: 0.1,
			}}
			className={cn(
				"shrink-0 shadow-lg h-full self-stretch overflow-hidden",
				className,
			)}
		>
			<motion.div
				variants={{
					open: {
						opacity: 1,
						translateX: 0,
					},
					closed: {
						opacity: 0,
						translateX: -100,
					},
				}}
				transition={{
					repeatType: "reverse",
				}}
				exit={"closed"}
				animate={props.open ? "open" : "closed"}
				style={{
					minWidth: props.width ?? "100%",
					zIndex: props.index,
				}}
				className="h-full"
			>
				{props.children}
			</motion.div>
		</motion.div>
	);
}

export function Dashboard(props: PropsWithChildren<{}>) {
	const { children } = props;
	return (
		<TooltipSettingsProvider direction={"left"}>
			<AnimatePresence>
				<div className="flex h-full w-full">{children}</div>
			</AnimatePresence>
		</TooltipSettingsProvider>
	);
}

Dashboard.Column = LayoutDashboardColumn;
