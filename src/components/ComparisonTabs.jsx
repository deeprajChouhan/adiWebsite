import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";

const ComparisonTabs = ({ tabs }) => {
  const [value, setValue] = useState(0);

  return (
    <Box>
      <Tabs value={value} onChange={(_, newValue) => setValue(newValue)} aria-label="comparison tabs">
        {tabs.map((tab, index) => (
          <Tab key={tab.label} label={tab.label} id={`tab-${index}`} aria-controls={`tabpanel-${index}`} />
        ))}
      </Tabs>
      <Box sx={{ mt: 2 }} role="tabpanel" id={`tabpanel-${value}`} aria-labelledby={`tab-${value}`}>
        <Typography variant="body1" color="text.secondary">
          {tabs[value].content}
        </Typography>
      </Box>
    </Box>
  );
};

export default ComparisonTabs;
