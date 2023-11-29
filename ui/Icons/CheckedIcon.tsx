import { CustomIconProps } from "@/interface/icons.interface";
import { primaryColors } from "@/themes/_muiPalette";

export default function CheckedIcon({
    IconColor,
    IconHeight,
    IconWidth
}: CustomIconProps) {
    return (

        <svg xmlns="http://www.w3.org/2000/svg" width={IconWidth || "16"}
            height={IconHeight || "16"} viewBox="0 0 16 16" fill="none">
            <rect x="0.5" y="0.5" width={IconWidth || "15"}
                height={IconHeight || "15"} rx="3.5" stroke={IconColor || primaryColors?.textPrimaryColor} />
            <path d="M12.3901 4.28012L7.05506 9.69085L4.60995 7.21093C4.2417 6.83745 3.64454 6.83739 3.27623 7.21087C2.90792 7.58441 2.90792 8.18999 3.27623 8.56353L6.38817 11.7198C6.56502 11.8992 6.80488 12 7.055 12H7.05506C7.30517 12 7.54503 11.8992 7.72189 11.7199L13.7238 5.63285C14.0921 5.25931 14.0921 4.65373 13.7238 4.28019C13.3555 3.90665 12.7584 3.90658 12.3901 4.28012Z" fill={IconColor || primaryColors?.textPrimaryColor} />
        </svg>
    );
}
