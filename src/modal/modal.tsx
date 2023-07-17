import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "../utils/useOnClickOutside";

function ModalContent(props: PropsWithChildren<{ onClose?: () => void }>) {
	const [contentRef, setRef] = useState<HTMLDivElement | null>(null);

	useOnClickOutside([contentRef], () => {
		props.onClose?.();
	});

	return (
		<div ref={setRef} className="w-2/3 bg-white rounded-lg">
			{props.children}
		</div>
	);
}

export function Modal(
	props: PropsWithChildren<{ open: boolean; onClose?: () => void }>,
) {
	const ref = useRef<HTMLDialogElement>(null);
	useEffect(() => {
		if (!props.open) return;
		ref.current?.focus();
	}, [props.open]);

	return (
		<AnimatePresence>
			{props.open && (
				<motion.dialog
					ref={ref}
					onKeyDown={(c) => {
						if (c.key === "Escape") {
							props.onClose?.();
						}
					}}
					exit={{ opacity: 0 }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					open={props.open}
					style={{
						zIndex: 1000,
					}}
					className="fixed top-0 backdrop-blur h-screen w-screen flex justify-center items-center z-50 bg-gray-900/50"
				>
					<ModalContent onClose={props.onClose}>{props.children}</ModalContent>
				</motion.dialog>
			)}
		</AnimatePresence>
	);
}
