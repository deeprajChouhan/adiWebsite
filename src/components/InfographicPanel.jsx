import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const InfographicPanel = ({ title, children }) => (
  <Card className="card-hover" sx={{ height: "100%" }}>
    <CardContent>
      <Typography variant="h3" sx={{ mb: 2 }}>
        {title}
      </Typography>
      {children}
    </CardContent>
  </Card>
);

export default InfographicPanel;
