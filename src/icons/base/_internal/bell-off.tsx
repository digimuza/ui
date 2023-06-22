import type { SVGProps } from "react";
const SvgBellOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1027_7204)">
      <path
        d="M13.73 21C13.5542 21.3031 13.3018 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21M18.63 13C18.1851 11.3714 17.973 9.68804 18 8C18.0016 6.91306 17.7079 5.84611 17.1503 4.91309C16.5927 3.98008 15.7922 3.21606 14.8341 2.70264C13.8761 2.18922 12.7966 1.94569 11.7109 1.99807C10.6252 2.05044 9.57417 2.39675 8.67 3M6.26 6.26C6.08627 6.82361 5.99861 7.41022 6 8C6 15 3 17 3 17H17M1 1L23 23"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1027_7204">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBellOff;
