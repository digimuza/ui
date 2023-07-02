import { useEffect } from "react";

/**
 * Simple utility hook that helps detect outside click
 *
 * It's worth noting that because passed in handler is a new
 * function on every render that will cause this effect
 * callback/cleanup to run every render. It's not a big deal
 * but to optimize you can wrap handler in useCallback before
 * passing it into this hook
 */
export function useOnClickOutside(
	ref:
		| HTMLDivElement
		| null
		| (HTMLElement | null)[]
		| (HTMLDivElement | null)[],
	onOutsideClick: () => void,
) {
	useEffect(() => {
		const checkIfClickedItemIsInsideRefList = (event: Event) => {
			if (event.target == null) return;
			if (!(event.target instanceof Node)) return;
			if (ref == null) return;

			const refList = Array.isArray(ref) ? ref : [ref];
			const isInsideRefList = refList.some((referenceElement) => {
				const isRefTargetIsNode = event.target instanceof Node;
				if (!isRefTargetIsNode) return false;
				return referenceElement?.contains(event.target);
			});
			if (isInsideRefList) return;
			onOutsideClick();
		};
		document.addEventListener("mousedown", checkIfClickedItemIsInsideRefList);
		document.addEventListener("touchstart", checkIfClickedItemIsInsideRefList);
		return () => {
			document.removeEventListener(
				"mousedown",
				checkIfClickedItemIsInsideRefList,
			);
			document.removeEventListener(
				"touchstart",
				checkIfClickedItemIsInsideRefList,
			);
		};
	}, [ref, onOutsideClick]);
}
