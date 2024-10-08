import { Icon } from "@/type/IconInterface";

export const TaskIcon = ({ width, height, color }: Icon) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.70175 4.40063H27.3333C28.7164 4.40063 29.848 5.53221 29.848 6.91526V23.2603C29.848 24.6433 28.7164 25.7749 27.3333 25.7749H4.70175C3.31871 25.7749 2.18713 24.6433 2.18713 23.2603V6.91526C2.18713 5.53221 3.31871 4.40063 4.70175 4.40063ZM4.70172 6.91528V23.2603H14.7602V6.91528H4.70172ZM27.3333 23.2603H17.2749V6.91528H27.3333V23.2603ZM26.0761 11.3158H18.5322V13.2018H26.0761V11.3158ZM18.5322 14.4591H26.0761V16.3451H18.5322V14.4591ZM26.0761 17.6024H18.5322V19.4883H26.0761V17.6024Z"
        fill={color}
      />
    </svg>
  );
};
