import { PropsWithChildren } from "react";
import Header from "../Header/Header";
import Siderbar from "../Sidebar/Siderbar";

const DashbordLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-auto min-h-screen fixed w-full h-full flex-shrink-0 top-0 antialiased   bg-[#FAFAFA]">
      <Siderbar />
      <div className="flex flex-col  flex-grow flex-1 h-full w-full overflow-y-scroll overflow-x-hidden ">
        <Header />

        <div className="flex-1 pb-16 p-5 min-h-0 h-full overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashbordLayout;
