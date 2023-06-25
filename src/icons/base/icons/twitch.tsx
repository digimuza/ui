import type { SVGProps } from "react";
const SvgTwitch = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M16 11V7M21 2H3V18H8V22L12 18H17L21 14V2ZM11 11V7V11Z"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SvgTwitch;
