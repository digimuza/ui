import type { SVGProps } from "react";
const SvgCloudSnow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1027_7234)">
      <path
        d="M20 17.58C21.0512 17.1195 21.9121 16.3115 22.4381 15.2915C22.9641 14.2715 23.1231 13.1016 22.8886 11.9781C22.6541 10.8547 22.0402 9.84617 21.15 9.12179C20.2599 8.39742 19.1476 8.00131 18 7.99996H16.74C16.423 6.77248 15.8189 5.63791 14.9773 4.68976C14.1358 3.74161 13.0809 3.00703 11.8998 2.54658C10.7186 2.08612 9.44491 1.91297 8.18368 2.0414C6.92246 2.16983 5.70981 2.59615 4.6457 3.28524C3.58158 3.97433 2.69647 4.90644 2.06331 6.00475C1.43015 7.10307 1.06708 8.33613 1.00401 9.60231C0.940954 10.8685 1.17971 12.1315 1.70061 13.2873C2.2215 14.4431 3.00962 15.4585 4 16.25M8 16H8.01M8 20H8.01M12 18H12.01M12 22H12.01M16 16H16.01M16 20H16.01"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1027_7234">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCloudSnow;
