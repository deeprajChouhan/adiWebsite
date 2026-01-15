import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const GuidelineAccordion = ({ items }) => (
  <div>
    {items.map((item) => (
      <Accordion key={item.title}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${item.title}-content`} id={`${item.title}-header`}>
          <Typography variant="subtitle1">{item.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" color="text.secondary">
            {item.body}
          </Typography>
        </AccordionDetails>
      </Accordion>
    ))}
  </div>
);

export default GuidelineAccordion;
