import type { SVGProps } from "react";
const SvgGitCommit = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M1.04999 12H6.99999M17.01 12H22.96M16 12C16 14.2091 14.2091 16 12 16C9.79085 16 7.99999 14.2091 7.99999 12C7.99999 9.79086 9.79085 8 12 8C14.2091 8 16 9.79086 16 12Z"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SvgGitCommit;
