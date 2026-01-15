import React, { useMemo, useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  ListItemText,
  TextField,
  Typography
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { useSearch } from "./SearchProvider.jsx";
import { Link as RouterLink } from "react-router-dom";

const highlightText = (text, query) => {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query})`, "gi"));
  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={index} className="search-highlight">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const createExcerpt = (section, query) => {
  if (!section) return "";
  const body = Array.isArray(section.body) ? section.body.join(" ") : section.body;
  if (!query) return body.slice(0, 140);
  const idx = body.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return body.slice(0, 140);
  return `...${body.slice(Math.max(0, idx - 40), idx + 80)}...`;
};

const SearchDialog = ({ open, onClose }) => {
  const [query, setQuery] = useState("");
  const { search } = useSearch();
  const results = useMemo(() => search(query), [query, search]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        Search the portal
        <Box sx={{ flex: 1 }} />
        <IconButton onClick={onClose} aria-label="Close search">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search appendices, keywords, and content"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
        <Box sx={{ mt: 3 }}>
          {results.length === 0 ? (
            <Typography color="text.secondary">No matches yet. Try a different keyword.</Typography>
          ) : (
            <List>
              {results.map((result) => {
                const anchor = result.section?.id ? `#${result.section.id}` : "";
                const excerpt = createExcerpt(result.section, result.query);
                return (
                  <ListItemButton
                    key={`${result.id}-${result.section?.id}`}
                    component={RouterLink}
                    to={`/appendix/${result.id}${anchor}`}
                    onClick={onClose}
                    sx={{ mb: 1, borderRadius: 2 }}
                  >
                    <ListItemText
                      primary={highlightText(result.title, result.query)}
                      secondary={
                        <Box component="span">
                          <Typography variant="body2" color="text.secondary">
                            {highlightText(excerpt, result.query)}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Jump to: {result.section?.title ?? "Overview"}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItemButton>
                );
              })}
            </List>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
