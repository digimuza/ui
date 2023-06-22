import type { SVGProps } from "react";
const SvgCodepen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2L22 8.5M12 2L2 8.5M12 2V8.5M22 8.5V15.5M22 8.5L12 15.5M22 15.5L12 22M22 15.5L12 8.5M12 22L2 15.5M12 22V15.5M2 15.5V8.5M2 15.5L12 8.5M2 8.5L12 15.5"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCodepen;
