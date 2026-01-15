import React from "react";
import { Box, Chip, Stack, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";

const StepPill = ({ index, label }) => (
  <Stack
    direction="row"
    spacing={1}
    alignItems="center"
    sx={{
      px: 2,
      py: 1.5,
      borderRadius: 999,
      backgroundColor: "rgba(46,95,77,0.1)",
      border: "1px solid rgba(46,95,77,0.2)",
      minWidth: 160
    }}
  >
    <Chip
      label={index}
      size="small"
      sx={{
        fontWeight: 700,
        backgroundColor: "rgba(46,95,77,0.2)"
      }}
    />
    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
      {label}
    </Typography>
  </Stack>
);

const FlowDiagram = ({ title, steps, variant = "steps" }) => (
  <Box
    role="presentation"
    sx={{
      p: 2.5,
      borderRadius: 3,
      background: "linear-gradient(135deg, rgba(46,95,77,0.08), rgba(216,164,77,0.12))",
      border: "1px solid rgba(46,95,77,0.15)",
      mb: 2
    }}
  >
    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
      {variant === "cycle" && (
        <Chip label="Continuous loop" size="small" color="success" variant="outlined" />
      )}
    </Stack>
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={1.5}
      alignItems={{ xs: "flex-start", md: "center" }}
      flexWrap="wrap"
      useFlexGap
    >
      {steps.map((step, index) => (
        <React.Fragment key={`${step}-${index}`}>
          <StepPill index={index + 1} label={step} />
          {index < steps.length - 1 && (
            <ArrowForwardRoundedIcon sx={{ color: "rgba(46,95,77,0.6)" }} />
          )}
        </React.Fragment>
      ))}
      {variant === "cycle" && (
        <AutorenewRoundedIcon sx={{ color: "rgba(46,95,77,0.7)" }} />
      )}
    </Stack>
  </Box>
);

export default FlowDiagram;
