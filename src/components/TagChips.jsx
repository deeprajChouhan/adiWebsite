import React from "react";
import { Box, Chip } from "@mui/material";

const TagChips = ({ tags = [] }) => (
  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
    {tags.map((tag) => (
      <Chip key={tag} label={tag} size="small" />
    ))}
  </Box>
);

export default TagChips;
