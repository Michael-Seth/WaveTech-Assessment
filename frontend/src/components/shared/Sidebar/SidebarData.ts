import Home from "../../../assets/home.svg";
import Chat from "../../../assets/message.svg";
import Calendar from "../../../assets/calendar.svg";
import File from "../../../assets/file.svg";
import Plus from "../../../assets/health-plus.svg";
import Settings from "../../../assets/settings.svg";
import Refer from "../../../assets/gift.svg";
import Help from "../../../assets/headset.svg";

type ISideMenu = {
  icons: string;
  label: string;
  key: string;
  path: string;
}[];

export const topSidebarMenu: ISideMenu = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "app/dashboard",
    icons: Home,
  },
  {
    key: "shipment",
    label: "Consult a Doctor",
    path: "/app/consult",
    icons: Chat,
  },
  {
    key: "shipment",
    label: "Appointments",
    path: "/app/appointments",
    icons: Calendar,
  },

  {
    key: "shipment",
    label: "Medical History",
    path: "/app/medical",
    icons: File,
  },
  {
    key: "shipment",
    label: "My Hospital",
    path: "/app/hospitals",
    icons: Plus,
  },
];

export const bottomSidebarMenu: ISideMenu = [
  {
    key: "settings",
    label: "Settings",
    path: "app/settings",
    icons: Settings,
  },
  {
    key: "Help-center",
    label: "Help Center",
    path: "/app/help",
    icons: Help,
  },
  {
    key: "refer",
    label: "Refer family & friends",
    path: "/app/refer",
    icons: Refer,
  },
];
