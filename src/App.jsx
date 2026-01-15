import React, { Suspense, useCallback, useMemo, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Snackbar,
  Toolbar,
  Typography,
  useMediaQuery
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DownloadIcon from "@mui/icons-material/Download";
import BookIcon from "@mui/icons-material/MenuBook";
import BugReportIcon from "@mui/icons-material/BugReport";
import { Routes, Route, Navigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import SearchDialog from "./components/SearchDialog.jsx";
import SearchBar from "./components/SearchBar.jsx";
import SidebarNav from "./components/SidebarNav.jsx";
import { SearchProvider } from "./components/SearchProvider.jsx";
import { LayoutProvider, useLayout } from "./components/LayoutProvider.jsx";

const SectionOverview = React.lazy(() => import("./pages/SectionOverview.jsx"));
const AppendixPage = React.lazy(() => import("./pages/AppendixPage.jsx"));

const AppShell = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const { headingIds } = useLayout();

  const handleAction = useCallback((message) => {
    setSnackbar({ open: true, message });
  }, []);

  const handleSearchShortcut = useCallback((event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      setSearchOpen(true);
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("keydown", handleSearchShortcut);
    return () => window.removeEventListener("keydown", handleSearchShortcut);
  }, [handleSearchShortcut]);

  const drawerContent = useMemo(
    () => (
      <Box sx={{ width: 320, px: 1, pt: 2 }}>
        <SidebarNav headingIds={headingIds} />
      </Box>
    ),
    [headingIds]
  );

  return (
    <SearchProvider>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <AppBar position="fixed" elevation={0} color="inherit" sx={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
          <Toolbar sx={{ gap: 2 }}>
            {isMobile && (
              <IconButton edge="start" onClick={() => setMobileOpen(true)} aria-label="Open navigation">
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Harvest & Co. Rebrand Portal
            </Typography>
            <Box sx={{ flex: 1, maxWidth: 460, ml: 2, display: { xs: "none", md: "block" } }}>
              <SearchBar onFocus={() => setSearchOpen(true)} />
            </Box>
            <Box sx={{ flex: 1, display: { xs: "block", md: "none" } }} />
            <Button
              startIcon={<DownloadIcon />}
              onClick={() => handleAction("Downloading all assets is queued. You will be notified when ready.")}
              sx={{ display: { xs: "none", md: "inline-flex" } }}
            >
              Download all assets
            </Button>
            <Button
              startIcon={<BookIcon />}
              onClick={() => handleAction("Glossary is loading. Jumping to definitions...")}
              sx={{ display: { xs: "none", md: "inline-flex" } }}
            >
              Open glossary
            </Button>
            <Button
              startIcon={<BugReportIcon />}
              onClick={() => handleAction("Issue reported. The brand team will follow up within 24 hours.")}
              sx={{ display: { xs: "none", md: "inline-flex" } }}
            >
              Report an issue
            </Button>
            <Button
              variant="outlined"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              sx={{ display: { xs: "inline-flex", md: "none" } }}
            >
              Search
            </Button>
          </Toolbar>
        </AppBar>

        <Box component="nav" sx={{ width: { md: 320 }, flexShrink: { md: 0 } }}>
          {isMobile ? (
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={() => setMobileOpen(false)}
              ModalProps={{ keepMounted: true }}
              sx={{ "& .MuiDrawer-paper": { width: 320 } }}
            >
              {drawerContent}
            </Drawer>
          ) : (
            <Drawer
              variant="permanent"
              sx={{ "& .MuiDrawer-paper": { width: 320, boxSizing: "border-box", pt: 10, background: "#F4EFE6" } }}
              open
            >
              {drawerContent}
            </Drawer>
          )}
        </Box>

        <Box component="main" sx={{ flex: 1, px: { xs: 2, md: 4 }, pt: 12, pb: 6 }}>
          <Suspense fallback={<Typography>Loading...</Typography>}>
            <Routes>
              <Route path="/" element={<Navigate to="/section/strategy" replace />} />
              <Route path="/section/:slug" element={<SectionOverview />} />
              <Route path="/appendix/:id" element={<AppendixPage />} />
              <Route path="*" element={<Navigate to="/section/strategy" replace />} />
            </Routes>
          </Suspense>
        </Box>

        <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
        <Snackbar
          open={snackbar.open}
          autoHideDuration={3200}
          onClose={() => setSnackbar({ open: false, message: "" })}
          message={snackbar.message}
        />
      </Box>
    </SearchProvider>
  );
};

const App = () => (
  <LayoutProvider>
    <AppShell />
  </LayoutProvider>
);

export default App;
