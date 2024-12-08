import { AiOutlineInbox } from "react-icons/ai";
import { CgInsights } from "react-icons/cg";
import { IoBriefcaseOutline, IoHelpCircleOutline } from "react-icons/io5";
import { LuCarTaxiFront } from "react-icons/lu";
import { PiHouseSimpleFill } from "react-icons/pi";
import { RiSettingsLine } from "react-icons/ri";
import { TbCalculator, TbPictureInPictureOff } from "react-icons/tb";

// dashboard side bar
export const mainMenu = [
  {
    title: "Dashboard",
    icon: <PiHouseSimpleFill />,
  },
  {
    title: "Car Rent",
    icon: <LuCarTaxiFront />,
  },
  {
    title: "Insight",
    icon: <CgInsights />,
  },
  {
    title: "Reimburse",
    icon: <TbPictureInPictureOff />,
  },
  {
    title: "Inbox",
    icon: <AiOutlineInbox />,
  },
  {
    title: "Calender",
    icon: <TbCalculator />,
  },
];

// preference

export const preferenceData = [
  {
    title: "Settings",
    icon: <RiSettingsLine />,
  },
  {
    title: "Help & Center",
    icon: <IoHelpCircleOutline />,
  },
  {
    title: "Dark Mode",
    icon: <IoBriefcaseOutline />,
  }
];
