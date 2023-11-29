import { CustomIconProps } from "@/interface/icons.interface";
import { primaryColors } from "@/themes/_muiPalette";

export default function FilterIconMain({
    IconColor,
    IconHeight,
    IconWidth
}: CustomIconProps) {
    return (

        <svg xmlns="http://www.w3.org/2000/svg" width={IconWidth || "16"}
            height={IconHeight || "16"} viewBox="0 0 16 16" fill="none">
            <path d="M0.499516 2.82561H8.10481C8.33402 3.86894 9.26574 4.65221 10.3769 4.65221C11.4881 4.65221 12.4198 3.86897 12.649 2.82561H15.485C15.7609 2.82561 15.9845 2.60195 15.9845 2.32609C15.9845 2.05023 15.7609 1.82657 15.485 1.82657H12.6488C12.4191 0.783772 11.4861 0 10.3769 0C9.26712 0 8.33455 0.783647 8.10499 1.82657H0.499516C0.223658 1.82657 0 2.05023 0 2.32609C0 2.60195 0.223658 2.82561 0.499516 2.82561ZM9.04989 2.3274L9.04992 2.32203C9.05211 1.59252 9.64737 0.999063 10.3769 0.999063C11.1054 0.999063 11.7007 1.59171 11.7039 2.32088L11.704 2.32821C11.7028 3.05897 11.108 3.65321 10.3769 3.65321C9.64619 3.65321 9.05151 3.05957 9.04986 2.32924L9.04989 2.3274ZM15.485 13.1744H12.6488C12.4191 12.1316 11.4861 11.3478 10.3769 11.3478C9.26712 11.3478 8.33455 12.1315 8.10499 13.1744H0.499516C0.223658 13.1744 0 13.398 0 13.6739C0 13.9498 0.223658 14.1734 0.499516 14.1734H8.10481C8.33402 15.2167 9.26574 16 10.3769 16C11.4881 16 12.4198 15.2167 12.649 14.1734H15.485C15.7609 14.1734 15.9845 13.9498 15.9845 13.6739C15.9845 13.398 15.7609 13.1744 15.485 13.1744ZM10.3769 15.001C9.64619 15.001 9.05151 14.4073 9.04986 13.677L9.04989 13.6752L9.04992 13.6698C9.05211 12.9403 9.64737 12.3468 10.3769 12.3468C11.1054 12.3468 11.7007 12.9395 11.7039 13.6686L11.704 13.6759C11.7029 14.4068 11.108 15.001 10.3769 15.001ZM15.485 7.50048H7.87971C7.6505 6.45715 6.71877 5.67391 5.6076 5.67391C4.49643 5.67391 3.5647 6.45715 3.33549 7.50048H0.499516C0.223658 7.50048 0 7.72414 0 8C0 8.27589 0.223658 8.49952 0.499516 8.49952H3.33574C3.56542 9.54229 4.49839 10.3261 5.6076 10.3261C6.7174 10.3261 7.64996 9.54241 7.87952 8.49952H15.485C15.7609 8.49952 15.9845 8.27589 15.9845 8C15.9845 7.72414 15.7609 7.50048 15.485 7.50048ZM6.93463 7.99869L6.9346 8.00406C6.93241 8.73357 6.33714 9.32703 5.6076 9.32703C4.87909 9.32703 4.28379 8.73438 4.28063 8.00525L4.28054 7.99794C4.28163 7.26709 4.87653 6.67294 5.6076 6.67294C6.33833 6.67294 6.933 7.26655 6.93466 7.99691L6.93463 7.99869Z" fill={IconColor || primaryColors?.primaryOrange} />
        </svg>
    );
}
