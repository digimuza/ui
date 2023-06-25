import type { SVGProps } from "react";
const SvgTrendingDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M23 18L13.5 8.5L8.5 13.5L1 6M23 18H17M23 18V12"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SvgTrendingDown;
