import React, { useState } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const CopyBlock = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Paper variant="outlined" sx={{ p: 2, backgroundColor: "#F9F6F0" }}>
      <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 2 }}>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
        <Button size="small" startIcon={<ContentCopyIcon />} onClick={handleCopy} aria-label="Copy text">
          {copied ? "Copied" : "Copy"}
        </Button>
      </Box>
    </Paper>
  );
};

export default CopyBlock;
