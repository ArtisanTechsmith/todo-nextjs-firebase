"use client";
import React from "react";
import { Accordion as MuiAccordion, AccordionDetails, AccordionSummary, useTheme } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface Props {
  summary: React.ReactNode;
  details: React.ReactNode;
}
const Accordion = (props: Props) => {
  const theme = useTheme();

  return (
    <MuiAccordion
      defaultExpanded
      elevation={0}
      disableGutters
      sx={{ backgroundColor: theme.palette.background.default }}
    >
      <AccordionSummary
        component="span"
        expandIcon={<KeyboardArrowDownIcon />}
        sx={{ flexDirection: "row-reverse", gap: 1 }}
      >
        {props.summary}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          "&.MuiAccordionDetails-root": {
            padding: 0,
            paddingTop: 1,
          },
        }}
      >
        {props.details}
      </AccordionDetails>
    </MuiAccordion>
  );
};

export default Accordion;
