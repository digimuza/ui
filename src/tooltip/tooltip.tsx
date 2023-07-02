import * as RToolTip from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { PropsWithChildren, createContext, useContext } from "react";

interface TooltipContextValue {
	direction: "left" | "right" | "top" | "bottom";
}
const TooltipDirectionContext = createContext<TooltipContextValue>({
	direction: "left",
});

export function TooltipSettingsProvider(
	props: PropsWithChildren<TooltipContextValue>,
) {
	const { direction, children } = props;
	return (
		<TooltipDirectionContext.Provider value={{ direction }}>
			{children}
		</TooltipDirectionContext.Provider>
	);
}

export function Tooltip(props: {
	children?: React.ReactNode;
	content?: React.ReactNode;
}) {
	const { children, content } = props;
	const { direction } = useContext(TooltipDirectionContext);
	if (content == null) return <>{children}</>;
	return (
		<RToolTip.Root>
			<RToolTip.Trigger asChild>{children}</RToolTip.Trigger>
			<RToolTip.Portal>
				<RToolTip.Content
					side={direction}
					asChild
					forceMount
					className="rounded-md p-3 z-50 bg-gray-900 shadow-md text-sm text-gray-900f"
					sideOffset={5}
				>
					<motion.div
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
					>
						{content}
						<RToolTip.Arrow className="fill-black" />
					</motion.div>
				</RToolTip.Content>
			</RToolTip.Portal>
		</RToolTip.Root>
	);
}
