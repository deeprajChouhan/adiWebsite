import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DownloadIcon from "@mui/icons-material/Download";
import { useTheme } from "@mui/material/styles";

const DownloadList = ({ downloads }) => (
  <List>
    {downloads.length === 0 ? (
      <Typography color="text.secondary" sx={{ px: 2, py: 1 }}>
        No assets available yet. Check back after the next toolkit release.
      </Typography>
    ) : (
      downloads.map((item) => (
        <ListItem key={item.name} secondaryAction={<Button size="small" startIcon={<DownloadIcon />}>Download</Button>}>
          <ListItemText primary={item.name} secondary={`${item.type} · ${item.size}`} />
        </ListItem>
      ))
    )}
  </List>
);

const DownloadPanel = ({ downloads }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [expanded, setExpanded] = useState(false);

  if (isMobile) {
    return (
      <Accordion expanded={expanded} onChange={() => setExpanded((prev) => !prev)} sx={{ mt: 3 }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="downloads-content" id="downloads-header">
          <Typography variant="h3">Downloadable assets</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DownloadList downloads={downloads} />
        </AccordionDetails>
      </Accordion>
    );
  }

  return (
    <Card sx={{ position: "sticky", top: 120 }}>
      <CardContent>
        <Typography variant="h3" sx={{ mb: 1 }}>
          Downloadable assets
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <DownloadList downloads={downloads} />
      </CardContent>
    </Card>
  );
};

export default DownloadPanel;
