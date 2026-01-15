import React from "react";
import { Box, Card, CardContent, LinearProgress, Typography } from "@mui/material";

const KPIStatCard = ({ label, value, progress }) => (
  <Card className="card-hover" sx={{ height: "100%" }}>
    <CardContent>
      <Typography variant="subtitle2" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="h3" sx={{ mt: 1, mb: 1 }}>
        {value}
      </Typography>
      <Box>
        <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 4 }} />
        <Typography variant="caption" color="text.secondary">
          {progress}% to target
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default KPIStatCard;
