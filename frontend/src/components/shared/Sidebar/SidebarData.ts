import  Home from "../../../assets/home.svg"
import  Chat from "../../../assets/message.svg"
import  Calendar from "../../../assets/calendar.svg"
import  File from "../../../assets/file.svg"
import  Plus from "../../../assets/health-plus.svg"
import  Gift from "../../../assets/gift.svg"


type ISideMenu = {
    icons: string;
    label: string;
    key: string;
    path: string;
}[];



export const sidebarMenu: ISideMenu = [
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
        icons:File,
    },
    {
        key: "shipment",
        label: "My Hospital",
        path: "/app/dashboard",
        icons: Plus,
    },
]