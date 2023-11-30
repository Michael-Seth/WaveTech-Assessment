import { BsFilter } from "react-icons/bs";
import { FiHome } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { HiChevronUpDown } from "react-icons/hi2";
import { Rating } from "@mui/material";
import { IoMdMore } from "react-icons/io";
import { useAppSelector } from "../../constants/redux/hooks";
import PlusIcon from "../../components/shared/custom-icons/PlusIcon"

const Dashboard = () => {
  const { allHospitals } = useAppSelector((state) => state.auth);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-[600] text-xl">My Hospitals</h1>
        <div>
          <div className="flex w-[205px] items-center text-white p-3 font-medium text-sm rounded-md justify-around bg-primary">
            <CiSearch className=" text-lg font-bold" />
            <span>Find hospitals near me</span>
          </div>
        </div>
      </div>

      <div className="flex gap-5 items-center justify-start mt-3">
        <div>
          <div className="flex items-center text-gray-600 p-3 font-medium text-sm rounded-md justify-between bg-primaryLight border border-[#FCD2C2]">
            <PlusIcon /> <p className="mx-3">All Hospitals</p>
            <span className="bg-primary rounded-full h-4 text-white flex justify-center items-center w-5 font-normal p-1 ">
              0
            </span>
          </div>
        </div>
        <div className="flex items-center text-gray-600 p-3 font-medium text-sm rounded-md justify-around bg-gray-100 border">
          <LuClock3 /> <p className="mx-3">Recently Visited</p>
          <span className="bg-gray-300 rounded-full h-4 flex justify-center items-center w-5 font-normal p-1 ">
            0
          </span>
        </div>
        <div className="flex items-center text-gray-600 p-3 font-medium text-sm rounded-md justify-around bg-gray-100 border">
          <FiHome /> <p className="mx-3">Favourites</p>
          <span className="bg-gray-300 rounded-full h-4 flex justify-center items-center w-5 font-normal p-1 ">
            0
          </span>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex items-center justify-between ">
          <h4 className="font-semibold">All Hospitals</h4>
          <div className="flex items-center justify-between gap-2 w-48 my-2">
            <div className="flex items-center">
              <CiSearch className="w-4 text-[#667185]" />
              <p className="ml-1 text-sm text-[#667185]">Search</p>
            </div>
            <div className="flex items-center">
              <BsFilter className="w-4 text-[#667185]" />
              <p className="ml-1 text-sm text-[#667185]">Filter</p>
            </div>
            <div className="flex items-center">
              <HiChevronUpDown className="w-5 text-[#667185]" />
              <p className="ml-1 text-sm text-[#667185]">Sort</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left border border-solid rounded-md rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700  capitalize bg-gray-50  ">
              <tr className="border-solid border rounded-[20px]">
                <th scope="col" className="px-6 py-3">
                  <div className="flex flex-row justify-between">
                    Name
                    <HiChevronUpDown className="w-5 h-5 text-[#667185]" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="flex flex-row justify-between">
                    Address
                    <HiChevronUpDown className="w-5 h-5 text-[#667185]" />
                  </div>
                </th>
                <th scope="col" className="px-16 py-3">
                  <div className="flex flex-row justify-between">
                    Phone
                    <HiChevronUpDown className="w-5 h-5 text-[#667185]" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 ">
                  <div className="flex flex-row justify-between">
                    Ratings
                    <HiChevronUpDown className="w-5 h-5 text-[#667185]" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {allHospitals.map((hospital, index) => {
                return (
                  <tr key={index} className="bg-white">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {hospital.name}
                    </th>
                    <td className="px-6 py-4">{hospital.address}</td>
                    <td className="px-6 py-4"> {hospital.phone_number}</td>
                    <td className="px-6 py-4">
                      <Rating value={Number(hospital.ratings)} max={5} />
                    </td>
                    <td className="px-6 py-4">
                      <IoMdMore className="text-2xl" />{" "}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
