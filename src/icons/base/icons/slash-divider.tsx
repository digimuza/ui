import type { SVGProps } from "react";
const SvgSlashDivider = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<line
			x1={7.51631}
			y1={22.1711}
			x2={16.8139}
			y2={2.2323}
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SvgSlashDivider;
