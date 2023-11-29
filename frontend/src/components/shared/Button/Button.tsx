import { Box, Button, Tooltip, Typography } from "@mui/material";
import React from "react";
import RenderIf from "../RenderIf/RenderIf";

type ICustomButton = {
  bg?: string;
  label: string;
  customStyles?: string;
  icon?: React.ReactNode | string;
  iconString?: string;
  textColor?: string;
  onClick?: any;
  variant?: string;
  id?: string;
  py?: string;
  loading?: boolean;
  disabled?: boolean;
  tooltip?: string;
};

function CustomButton({
  bg,
  label,
  customStyles,
  icon,
  onClick,
  textColor,
  id,
  py,
  variant = "contained",
  loading,
  iconString,
  tooltip,
  disabled = false,
}: ICustomButton) {
  return (
    <Button
      id={id}
      disabled={disabled}
      variant={variant === "contained" ? "contained" : "outlined"}
      className={`${bg && bg}   ${customStyles} ${
        textColor ? textColor : "text-white"
      } w-full capitalize font-[500] rounded-lg outline-none ${
        py ? py : "py-3"
      } shadow-none`}
      onClick={onClick}
    >
      <RenderIf condition={!!icon}>{icon}</RenderIf>
      <RenderIf condition={!!iconString}>
        <Box component="img" src={iconString} className="w-[32px] h-[32px]" />
      </RenderIf>
      <Tooltip title={tooltip ? tooltip : ""}>
        <Typography
          className={`${icon && "ml-3"} sm:text-[12px]`}
          variant="body2"
        >
          {loading ? "Loading ..." : label}
        </Typography>
      </Tooltip>
    </Button>
  );
}

export default CustomButton;
