import type { SVGProps } from "react";
const SvgCoins = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.42202 4.15802C12.2986 1.2801 16.964 1.28122 19.8417 4.15802C22.7194 7.03483 22.7194 11.7006 19.8417 14.5785M16.7374 14.6308C16.7374 18.7007 13.4383 22 9.36868 22C5.29907 22 2 18.7007 2 14.6308C2 10.5608 5.29907 7.26151 9.36868 7.26151C13.4383 7.26151 16.7374 10.5608 16.7374 14.6308Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCoins;
