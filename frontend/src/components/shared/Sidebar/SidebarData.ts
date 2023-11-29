

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
        icons: "/Assets/Icons/dashboard.svg",
    },
    {
        key: "shipment",
        label: "Consult a Doctor",
        path: "/app/consult",
        icons: "/Assets/Icons/ship.svg",
    },
    {
        key: "shipment",
        label: "Appointments",
        path: "/app/appointments",
        icons: "/Assets/Icons/ship.svg",
    },

    {
        key: "shipment",
        label: "Medical History",
        path: "/app/medical",
        icons: "/Assets/Icons/ship.svg",
    },
    {
        key: "shipment",
        label: "My Hospital",
        path: "/app/hospital",
        icons: "/Assets/Icons/ship.svg",
    },

]