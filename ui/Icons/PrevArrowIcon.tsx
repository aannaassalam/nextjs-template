import { CustomIconProps } from "@/interface/icons.interface";
import { primaryColors } from "@/themes/_muiPalette";

export default function PrevArrowIcon({
  IconColor,
  IconHeight,
  IconWidth
}: CustomIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={IconWidth || "8"}
      height={IconHeight || "15"}
      viewBox="0 0 8 15"
      fill="none"
    >
      <path
        d="M6.6001 13.9456L1.65576 9.00126C1.07185 8.41734 1.07185 7.46184 1.65576 6.87793L6.6001 1.93359"
        stroke={IconColor || primaryColors?.primaryOrange}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
