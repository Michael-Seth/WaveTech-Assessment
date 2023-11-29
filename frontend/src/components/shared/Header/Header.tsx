import { Box, IconButton, Typography } from "@mui/material";
import { HiOutlineBell } from "react-icons/hi";
import { useAppSelector } from "../../../constants/redux/hooks";

const Header = () => {
  const { userDetails: user } = useAppSelector((state) => state.auth);
  return (
    <div className=" bg-white h-20 px-4 flex flex-row items-center justify-between">
      <div className="sm:hidden w-1/3 flex items-center bg-slate-900  ">
        <input
          type="search"
          placeholder="Search here..."
          className="text-sm focus:outline-none active:outline-none h-10 w-[100%]  border-[#D2D2D4] border rounded-md px-3 text-gray-400"
        />
      </div>

      <div className="flex items-center sm:justify-between  sm:w-full gap-2 mr-3 pr-20 lg:pr-2">
        {/* menu */}

        {/* message */}

        <IconButton className="relative">
          <HiOutlineBell
            fontSize={24}
            className="mr-5 h-[18px] w-[18px] rounded-full "
          />
          <Typography
            variant="caption"
            className="absolute top-0 bg-primary text-white font-[600] font-SF w-[18px] h-[18px] flex items-center justify-center text-[14px] rounded-full"
          >
            4
          </Typography>
        </IconButton>

        <Box
          component="div"
          className="sm:hidden w-[40px] h-[40px] rounded-full"
        >
          <Box
            component="img"
            src={
              user?.profileImg ??
              "https://cdn.pixabay.com/photo/2016/09/28/02/14/user-1699635_1280.png"
            }
            width="40px"
            height="40px"
            alt="profile"
            className="rounded-full"
          />
        </Box>
        <Box
          component="button"
          className="sm:hidden flex items-start gap-2 border-none bg-black/0 relative cursor-pointer"
        >
          <Box className="flex flex-col gap-2 ">
            <span className="font-[600] font-SF text-[16px]">
              {user?.firstname ?? ""} {user?.lastname ?? ""}
            </span>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Header;
