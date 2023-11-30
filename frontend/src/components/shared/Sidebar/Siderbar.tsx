import { Box } from "@mui/material";
import { bottomSidebarMenu, topSidebarMenu } from "./SidebarData";
import AppLogo from "../custom-icons/AppLogo";
import SidebarLink from "./SidebarLink";

const Siderbar = () => {
  return (
    <Box
      component="aside"
      className=" flex flex-col w-[272px] h-full py-3 bg-white shadow xl:overflow-y-auto 2xl:overflow-y-auto    "
    >
      <Box
        component="div"
        className="flex items-center gap-2 mt-2 justify-center"
      >
        <AppLogo color="#fff" />
      </Box>
      <Box component="div" className="flex-1 py-8 flex flex-col gap-2">
        {topSidebarMenu?.map((menu) => {
          return (
            <SidebarLink
              key={menu.key}
              icons={menu.icons}
              path={menu.path}
              label={menu.label}
              id={menu.key}
            />
          );
        })}
      </Box>
      <Box component="div" className="flex-0 py-1 flex flex-col gap-1">
        {bottomSidebarMenu?.map((menu) => {
          return (
            <SidebarLink
              key={menu.key}
              icons={menu.icons}
              path={menu.path}
              label={menu.label}
              id={menu.key}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Siderbar;
