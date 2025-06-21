"use client";
import React from "react";
import { FilledInput, useTheme } from "@mui/material";

interface Props {
  endAdornment?: React.ReactNode;
}
const SearchInput = (props: Props) => {
  const theme = useTheme();

  return (
    <FilledInput
      sx={{
        width: "100%",
        borderRadius: 999,
        "&.MuiInputBase-root::before,&.Mui-focused::after": {
          borderBottom: "none !important",
        },
        "& input": {
          paddingTop: 2,
          paddingBottom: 2,
          paddingLeft: 3,
        },
        transition: "all 0.1s ease",
        backgroundColor: theme.palette.secondary.light,
        "&:hover, &:focus-within": {
          backgroundColor: theme.palette.secondary.light,
          filter: "brightness(98%)",
        },
      }}
      endAdornment={props.endAdornment}
    />
  );
};

export default SearchInput;
