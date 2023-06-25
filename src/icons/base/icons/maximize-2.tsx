import type { SVGProps } from "react";
const SvgMaximize2 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M15 3H21M21 3V9M21 3L14 10M9 21H3M3 21V15M3 21L10 14"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SvgMaximize2;
