import { CustomIconProps } from "@/interface/icons.interface";
import { primaryColors } from "@/themes/_muiPalette";

export default function IconDateOrange({
    IconColor,
    IconHeight,
    IconWidth
}: CustomIconProps) {
    return (

        <svg xmlns="http://www.w3.org/2000/svg" width={IconWidth || "13"}
            height={IconHeight || "13"} viewBox="0 0 13 13" fill="none">
            <path d="M11.05 1.95H10.4V0.65C10.4 0.477609 10.3315 0.312279 10.2096 0.190381C10.0877 0.0684819 9.92239 0 9.75 0C9.57761 0 9.41228 0.0684819 9.29038 0.190381C9.16848 0.312279 9.1 0.477609 9.1 0.65V1.95H3.9V0.65C3.9 0.477609 3.83152 0.312279 3.70962 0.190381C3.58772 0.0684819 3.42239 0 3.25 0C3.07761 0 2.91228 0.0684819 2.79038 0.190381C2.66848 0.312279 2.6 0.477609 2.6 0.65V1.95H1.95C1.43283 1.95 0.936838 2.15545 0.571142 2.52114C0.205446 2.88684 0 3.38283 0 3.9V4.55H13V3.9C13 3.38283 12.7946 2.88684 12.4289 2.52114C12.0632 2.15545 11.5672 1.95 11.05 1.95ZM0 11.05C0 11.5672 0.205446 12.0632 0.571142 12.4289C0.936838 12.7946 1.43283 13 1.95 13H11.05C11.5672 13 12.0632 12.7946 12.4289 12.4289C12.7946 12.0632 13 11.5672 13 11.05V5.85H0V11.05Z" fill={IconColor || primaryColors?.primaryOrange} />
        </svg>
    );
}
