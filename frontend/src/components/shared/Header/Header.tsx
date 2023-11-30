import { Box, IconButton, Typography } from "@mui/material";
import { HiOutlineBell } from "react-icons/hi";
import { useAppSelector } from "../../../constants/redux/hooks";
import Search from "../../../assets/Icon-left.svg";

const Header = () => {
  const { userDetails: user } = useAppSelector((state) => state.auth);
  return (
    <div className=" bg-white h-20 px-4 flex items-center  w-full justify-between">
      <div className=" w-[629px] flex items-center rounded-md bg-slate-50  ">
        <img src={Search} className="ml-2 bg-transparent " alt="Search" />
        <input
          type="search"
          placeholder="Search here..."
          className="text-sm w-full bg-transparent focus:outline-none active:outline-none h-10    px-3"
        />
      </div>

      <div className="flex items-center right-0 relative  sm:w-full gap-2 mr-3 pr-20 lg:pr-2">
    

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

        <Box component="div" className=" w-[40px] h-[40px] rounded-full">
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
      </div>
    </div>
  );
};

export default Header;
