import type { SVGProps } from "react";
const Svg2Layers = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M2 14.5L12 19.5L22 14.5M12 4.5L2 9.5L12 14.5L22 9.5L12 4.5Z"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default Svg2Layers;
