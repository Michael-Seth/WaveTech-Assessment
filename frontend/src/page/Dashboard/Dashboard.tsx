import { BsHospital, BsSearch } from "react-icons/bs";
import CustomButton from "../../components/shared/Button/Button";
import { Rating } from "@mui/material";
import { IoMdMore } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../constants/redux/hooks";
import { getHospitals } from "../../constants/redux/auth/authApi";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { allHospitals } = useAppSelector((state) => state.auth);


  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-[600] text-xl">My Hospitals</h1>
        <div>
          <CustomButton
            label="Find hospital near me"
            bg="bg-primary"
            customStyles="w-[200px]"
            icon={<BsSearch />}
          />
        </div>
      </div>

      <div className="flex gap-5 items-center mt-3">
        <CustomButton
          label="All Hospitals"
          bg="bg-primaryLight"
          customStyles="w-[200px]"
          icon={<BsSearch />}
        />
        <CustomButton
          label="Find hospital near me"
          bg="bg-darkGray/20"
          customStyles="w-[200px]"
          icon={<BsSearch />}
        />
        <CustomButton
          label="Find hospital near me"
          bg="bg-darkGray/20"
          customStyles="w-[200px]"
          icon={<BsHospital />}
        />
      </div>
      <div className="mt-20">
        <div className="flex items-center justify-between">
          <h4>All Hospitals</h4>
          <div className="flex items-center gap-2">
            <CustomButton
              label="Search"
              variant="outlined"
              textColor="text-darkGray"
              customStyles="border-0"
              icon={<BsSearch className="text-xs -pl-6" />}
            />
            <CustomButton
              label="Filter"
              variant="outlined"
              textColor="text-darkGray"
              customStyles="border-0"
              icon={<BsHospital />}
            />
            <CustomButton
              label="Sort"
              variant="outlined"
              textColor="text-darkGray"
              customStyles="border-0 "
              icon={<BsHospital />}
            />
          </div>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left border border-solid rounded-md rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700  capitalize bg-gray-50  ">
              <tr className="border-solid border rounded-[20px]">
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>

                <th scope="col" className="px-16 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Rating
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
