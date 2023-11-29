import { CustomIconProps } from "@/interface/icons.interface";
import { primaryColors } from "@/themes/_muiPalette";

export default function LocationIconOrange({
    IconColor,
    IconHeight,
    IconWidth
}: CustomIconProps) {
    return (

        <svg xmlns="http://www.w3.org/2000/svg" width={IconWidth || "14"}
            height={IconHeight || "14"} viewBox="0 0 14 14" fill="none">
            <g clipPath="url(#clip0_81_1811)">
                <path d="M7 0C4.1055 0 1.75 2.37183 1.75 5.28792C1.75 9.43133 6.5065 13.7095 6.70892 13.8892C6.78893 13.9608 6.89251 14.0004 6.99989 14.0005C7.10727 14.0007 7.21093 13.9612 7.29108 13.8898C7.4935 13.7095 12.25 9.43133 12.25 5.28792C12.25 2.37183 9.8945 0 7 0ZM7 8.16667C5.39175 8.16667 4.08333 6.85825 4.08333 5.25C4.08333 3.64175 5.39175 2.33333 7 2.33333C8.60825 2.33333 9.91667 3.64175 9.91667 5.25C9.91667 6.85825 8.60825 8.16667 7 8.16667Z" fill={IconColor || primaryColors?.primaryOrange} />
            </g>
            <defs>
                <clipPath id="clip0_81_1811">
                    <rect width={IconWidth || "14"}
                        height={IconHeight || "14"} fill={IconColor || primaryColors?.white} />
                </clipPath>
            </defs>
        </svg>
    );
}
