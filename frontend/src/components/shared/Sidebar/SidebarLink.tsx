import { Box, Typography } from "@mui/material";
import classNames from "classnames";
import React from "react";
import { Link, useMatch } from "react-router-dom";

type ISidbarProps = {
  icons: string;
  label: string;
  key: string;
  path: string;
  id: string;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const linkClass =
  "flex items-center justify-center mr-[29px] no-underline  gap-2 font-light px-5 py-2 text-[16px] font-[400] rounded-r-md text-[#000] hover:bg-primaryLight hover:Text-[#000]  ";

function SidebarLink({ icons, label, path, id, setOpen }: ISidbarProps) {
  const isActive = useMatch({
    path: `/${path}/*`,
    end: true,
  });

  return (
    <Link
      to={path}
      className={classNames(
        isActive
          ? "bg-primaryLight text-[#000]"
          : isActive
          ? "bg-primaryLight text-[#000]"
          : "text-darkGray",
        linkClass
      )}
      id={`${id}`}
      onClick={() => {
        if (setOpen) {
          setOpen(false);
        }
      }}
    >
      <Box className="flex items-center justify-start gap-4 w-[209px] pl-6   ">
        <Box component="img" src={icons} className="text-[20px] mt-1   " />

        <Typography variant="h6" className="flex text-sm font-SF font-[500] ">
          {label}
        </Typography>
      </Box>
    </Link>
  );
}

export default SidebarLink;
