import React from "react";
import { Box, Button, Typography } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

const SectionHeading = ({ id, title }) => {
  const handleCopy = () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <Box id={id} className="section-anchor" sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
      <Typography variant="h2" component="h2" sx={{ flex: 1 }}>
        {title}
      </Typography>
      <Button size="small" startIcon={<LinkIcon />} onClick={handleCopy} aria-label={`Copy link to ${title}`}>
        Copy link
      </Button>
    </Box>
  );
};

export default SectionHeading;
