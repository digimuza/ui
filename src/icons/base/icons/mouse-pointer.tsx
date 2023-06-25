import type { SVGProps } from "react";
const SvgMousePointer = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M13 13L19 19M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SvgMousePointer;
