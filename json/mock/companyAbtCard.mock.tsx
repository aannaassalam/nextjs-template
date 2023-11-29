import { primaryColors } from "@/themes/_muiPalette";
import CoverageIcon from "@/ui/Icons/CoverageIcon";
import DocIcon from "@/ui/Icons/DocIcon";
import DocumentIcon from "@/ui/Icons/DocumentIcon";
import OverallIcon from "@/ui/Icons/OverallIcon";

export const companyAbtCard = [
    {
        icon: <OverallIcon />,
        width: 24,
        height: 24,
        text: "15% Overall",
        paragraph: "TCFD Coverage",
        bgColor: primaryColors?.colorFBF5E3,
    },
    {
        icon: <DocumentIcon />,
        width: 24,
        height: 24,
        text: "3 Documents",
        paragraph: "With Climate Disclosure",
        bgColor: primaryColors?.colorFEF1EC,
    },
    {
        icon: <CoverageIcon />,
        width: 24,
        height: 24,
        text: "3% Coverage",
        paragraph: "TCFD From Regulatory Docs",
        bgColor: primaryColors?.colorF1EEF5,
    },
    {
        icon: <DocIcon />,
        width: 24,
        height: 24,
        text: "45% Coverage",
        paragraph: "TCFD From Discretionary Docs",
        bgColor: primaryColors?.colorF3FBF5,
    },
]