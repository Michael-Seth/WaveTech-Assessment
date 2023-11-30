import { Box } from "@mui/material";
import { HiOutlineBell } from "react-icons/hi";
import { useAppSelector } from "../../../constants/redux/hooks";
import Search from "../../../assets/Icon-left.svg";

const Header = () => {
  const user = useAppSelector((state) => {
    //console.log("State: ", state);
    state.auth;
  });
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

      <div className="flex items-center justify-end  sm:w-full gap-2 mr-3 pr-20 lg:pr-2">
        <HiOutlineBell
          fontSize={40}
          className="mr-5 bg-gray-100 w-9 h-9 p-2 text-gray-700 rounded-full "
        />

        <Box component="div" className=" w-[40px] h-[40px] rounded-full">
          <Box
            component="img"
            src={
              "https://image.shutterstock.com/image-photo/young-smiling-cheerful-satisfied-positive-260nw-2127045413.jpg"
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
//user?.profileImg ??

export default Header;
