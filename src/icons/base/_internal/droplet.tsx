import type { SVGProps } from "react";
const SvgDroplet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2.68994L17.66 8.34994C18.7794 9.46855 19.5418 10.894 19.8509 12.446C20.16 13.998 20.0019 15.6068 19.3965 17.0689C18.7912 18.531 17.7658 19.7808 16.4501 20.66C15.1344 21.5393 13.5875 22.0086 12.005 22.0086C10.4225 22.0086 8.87561 21.5393 7.5599 20.66C6.24419 19.7808 5.21882 18.531 4.61347 17.0689C4.00812 15.6068 3.85 13.998 4.15911 12.446C4.46822 10.894 5.23066 9.46855 6.35001 8.34994L12 2.68994Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgDroplet;
