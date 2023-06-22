import type { SVGProps } from "react";
const SvgShuffle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 3H21M21 3V8M21 3L4 20M21 16V21M21 21H16M21 21L15 15M4 4L9 9"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgShuffle;
