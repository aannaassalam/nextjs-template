import { CustomIconProps } from "@/interface/icons.interface";
import { primaryColors } from "@/themes/_muiPalette";

export default function UnCheckedIcon({
    IconColor,
    IconHeight,
    IconWidth
}: CustomIconProps) {
    return (

        <svg xmlns="http://www.w3.org/2000/svg" width={IconWidth || "16"}
            height={IconHeight || "16"} viewBox="0 0 16 16" fill="none">
            <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke={IconColor || primaryColors?.colorD9D9D9} />
        </svg>
    );
}
