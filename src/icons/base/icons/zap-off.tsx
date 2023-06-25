import type { SVGProps } from "react";
const SvgZapOff = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g clipPath="url(#clip0_1027_7146)">
			<path
				d="M12.41 6.75L13 2L10.57 4.92M18.57 12.91L21 10H15.66M8 8L3 14H12L11 22L16 16M1 1L23 23"
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_1027_7146">
				<rect width={24} height={24} fill="white" />
			</clipPath>
		</defs>
	</svg>
);
export default SvgZapOff;
