import React from "react";
import { Box, Divider, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import sections from "../data/sections.json";
import appendices from "../data/appendices.json";

const SidebarNav = ({ headingIds = [] }) => {
  const location = useLocation();
  const activeHash = location.hash.replace("#", "");

  return (
    <Box sx={{ position: "sticky", top: 88, height: "calc(100vh - 88px)", overflowY: "auto", pr: 1 }}>
      {sections.sidebarGroups.map((group) => (
        <Box key={group.title} sx={{ mb: 2 }}>
          <Typography variant="subtitle2" color="text.secondary" sx={{ px: 2, mb: 1 }}>
            {group.title}
          </Typography>
          <List dense>
            {group.items.map((id) => {
              const appendix = appendices.find((item) => item.id === id);
              if (!appendix) return null;
              return (
                <ListItemButton
                  key={id}
                  component={NavLink}
                  to={`/appendix/${id}`}
                  sx={{
                    borderRadius: 2,
                    mx: 1,
                    mb: 0.5,
                    "&.active": {
                      backgroundColor: "rgba(46, 95, 77, 0.12)",
                      fontWeight: 600
                    }
                  }}
                >
                  <ListItemText primary={`Appendix ${id}: ${appendix.title}`} />
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      ))}
      {headingIds.length > 0 && (
        <>
          <Divider sx={{ my: 2 }} />
          <Typography variant="subtitle2" color="text.secondary" sx={{ px: 2, mb: 1 }}>
            On this page
          </Typography>
          <List dense>
            {headingIds.map((heading) => (
              <ListItemButton
                key={heading.id}
                component="a"
                href={`#${heading.id}`}
                sx={{
                  borderRadius: 2,
                  mx: 1,
                  mb: 0.5,
                  backgroundColor: activeHash === heading.id ? "rgba(46, 95, 77, 0.12)" : "transparent"
                }}
              >
                <ListItemText primary={heading.title} />
              </ListItemButton>
            ))}
          </List>
        </>
      )}
    </Box>
  );
};

export default SidebarNav;
