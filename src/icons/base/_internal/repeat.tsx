import type { SVGProps } from "react";
const SvgRepeat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 1L21 5M21 5L17 9M21 5H7C5.93913 5 4.92172 5.42143 4.17157 6.17157C3.42143 6.92172 3 7.93913 3 9V11M7 23L3 19M3 19L7 15M3 19H17C18.0609 19 19.0783 18.5786 19.8284 17.8284C20.5786 17.0783 21 16.0609 21 15V13"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgRepeat;
