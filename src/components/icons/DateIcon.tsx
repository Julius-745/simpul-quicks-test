import { Icon } from "@/type";

export const DateIcon = ({ width, height, color }: Icon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.3333 1.99996H12.6667V0.666626H11.3333V1.99996H4.66668V0.666626H3.33334V1.99996H2.66668C1.93334 1.99996 1.33334 2.59996 1.33334 3.33329V14C1.33334 14.7333 1.93334 15.3333 2.66668 15.3333H13.3333C14.0667 15.3333 14.6667 14.7333 14.6667 14V3.33329C14.6667 2.59996 14.0667 1.99996 13.3333 1.99996ZM13.3333 14H2.66668V6.66663H13.3333V14ZM2.66668 5.33329H13.3333V3.33329H2.66668V5.33329Z"
        fill={color}
      />
    </svg>
  );
};
