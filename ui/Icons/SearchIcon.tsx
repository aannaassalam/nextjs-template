import { CustomIconProps } from "@/interface/icons.interface";
import { primaryColors } from "@/themes/_muiPalette";

export default function SearchIcon({
  IconColor,
  IconHeight,
  IconWidth
}: CustomIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth || "15"}
      height={IconHeight || "15"}
      viewBox="0 0 15 15"
      fill="none"
    >
      <path
        d="M3.1626 10.7933L9.53674e-07 13.9552L1.04485 15L4.2067 11.8374C5.38318 12.7805 6.84651 13.2935 8.35434 13.2913C12.0227 13.2913 15 10.3141 15 6.64566C15 2.97726 12.0227 0 8.35434 0C4.68593 0 1.70867 2.97726 1.70867 6.64566C1.70653 8.15349 2.21949 9.61682 3.1626 10.7933ZM4.64384 10.2454C3.70672 9.28169 3.18337 7.98988 3.18549 6.64566C3.18549 3.7895 5.49892 1.47681 8.35434 1.47681C11.2105 1.47681 13.5232 3.7895 13.5232 6.64566C13.5232 9.50108 11.2105 11.8145 8.35434 11.8145C7.01012 11.8166 5.71831 11.2933 4.7546 10.3562L4.64384 10.2454Z"
        fill={IconColor || primaryColors?.white}
      />
    </svg>
  );
}
