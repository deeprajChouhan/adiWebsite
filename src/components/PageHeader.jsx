import React from "react";
import { Box, Breadcrumbs, Chip, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const PageHeader = ({ title, goal, breadcrumbs = [], related = [], lastUpdated }) => (
  <Box sx={{ mb: 4 }}>
    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 1 }}>
      <RouterLink to="/" className="focus-ring">Portal</RouterLink>
      {breadcrumbs.map((crumb) => (
        <RouterLink key={crumb.label} to={crumb.href} className="focus-ring">
          {crumb.label}
        </RouterLink>
      ))}
    </Breadcrumbs>
    <Typography variant="h1" sx={{ mb: 1 }}>
      {title}
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
      {goal}
    </Typography>
    <Typography variant="caption" color="text.secondary">
      Last updated: {lastUpdated}
    </Typography>
    <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
      {related.map((item) => (
        <Chip key={item} label={item} variant="outlined" />
      ))}
    </Box>
  </Box>
);

export default PageHeader;
