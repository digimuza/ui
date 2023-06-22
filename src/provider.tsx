import { TooltipProvider } from "@radix-ui/react-tooltip";
import { AnimatePresence } from "framer-motion";
import { PropsWithChildren } from "react";
import { ToastViewPort } from "./toast/toast";

export function LibraryProvider(props: PropsWithChildren<{}>) {
	return (
		<TooltipProvider delayDuration={0}>
			{props.children}

			<AnimatePresence>
				<ToastViewPort />
			</AnimatePresence>
		</TooltipProvider>
	);
}
