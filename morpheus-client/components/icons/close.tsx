import { IconProps } from "./types";

export const CloseIcon = (props: IconProps) => (
  <svg
    width={props.width || "32"}
    height={props.height || "32"}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.1214 16.0005L27.5615 6.56147C28.1474 5.97549 28.1474 5.02543 27.5615 4.43949C26.9755 3.8535 26.0254 3.8535 25.4395 4.43949L16.0005 13.8795L6.56147 4.43949C5.97549 3.8535 5.02543 3.8535 4.43949 4.43949C3.85355 5.02547 3.8535 5.97553 4.43949 6.56147L13.8795 16.0005L4.43949 25.4395C3.8535 26.0255 3.8535 26.9755 4.43949 27.5615C5.02547 28.1474 5.97553 28.1474 6.56147 27.5615L16.0005 18.1214L25.4394 27.5615C26.0254 28.1474 26.9755 28.1474 27.5614 27.5615C28.1474 26.9755 28.1474 26.0254 27.5614 25.4395L18.1214 16.0005Z"
      fill={props.color || "white"}
    />
  </svg>
);