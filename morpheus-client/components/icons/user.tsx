import { IconProps } from "./types";

export const UserIcon = (props: IconProps) => (
  <svg
    width={props.width || "16"}
    height={props.height || "16"}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_132_6056)">
      <path
        d="M16 16C17.5823 16 19.129 15.5308 20.4446 14.6518C21.7602 13.7727 22.7855 12.5233 23.391 11.0615C23.9965 9.59966 24.155 7.99112 23.8463 6.43927C23.5376 4.88743 22.7757 3.46196 21.6569 2.34314C20.538 1.22432 19.1126 0.462395 17.5607 0.153714C16.0089 -0.154968 14.4003 0.00345866 12.9385 0.60896C11.4767 1.21446 10.2273 2.23984 9.34824 3.55543C8.46919 4.87103 8 6.41775 8 8C8.00212 10.1211 8.84565 12.1547 10.3455 13.6545C11.8453 15.1543 13.8789 15.9979 16 16ZM16 2.66666C17.0548 2.66666 18.086 2.97946 18.963 3.56549C19.8401 4.15153 20.5237 4.98448 20.9274 5.95902C21.331 6.93356 21.4366 8.00591 21.2309 9.04048C21.0251 10.075 20.5171 11.0254 19.7712 11.7712C19.0254 12.5171 18.075 13.0251 17.0405 13.2309C16.0059 13.4366 14.9336 13.331 13.959 12.9274C12.9845 12.5237 12.1515 11.8401 11.5655 10.963C10.9795 10.086 10.6667 9.05483 10.6667 8C10.6667 6.58551 11.2286 5.22895 12.2288 4.22876C13.229 3.22857 14.5855 2.66666 16 2.66666Z"
        fill={props.color || "#8B90B3"}
      />
      <path
        d="M16 18.6667C12.8185 18.6702 9.76829 19.9356 7.51862 22.1853C5.26894 24.435 4.00353 27.4851 4 30.6667C4 31.0203 4.14048 31.3594 4.39052 31.6095C4.64057 31.8595 4.97971 32 5.33333 32C5.68696 32 6.02609 31.8595 6.27614 31.6095C6.52619 31.3594 6.66667 31.0203 6.66667 30.6667C6.66667 28.1913 7.65 25.8173 9.40034 24.067C11.1507 22.3167 13.5246 21.3333 16 21.3333C18.4754 21.3333 20.8493 22.3167 22.5997 24.067C24.35 25.8173 25.3333 28.1913 25.3333 30.6667C25.3333 31.0203 25.4738 31.3594 25.7239 31.6095C25.9739 31.8595 26.313 32 26.6667 32C27.0203 32 27.3594 31.8595 27.6095 31.6095C27.8595 31.3594 28 31.0203 28 30.6667C27.9965 27.4851 26.7311 24.435 24.4814 22.1853C22.2317 19.9356 19.1815 18.6702 16 18.6667Z"
        fill={props.color || "#8B90B3"}
      />
    </g>
    <defs>
      <clipPath id="clip0_132_6056">
        <rect width="32" height="32" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
