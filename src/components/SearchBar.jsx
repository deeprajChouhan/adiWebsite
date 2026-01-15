import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ onFocus }) => {
  return (
    <TextField
      placeholder="Search appendices (Ctrl/Cmd + K)"
      size="small"
      onFocus={onFocus}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        ),
        readOnly: true
      }}
      sx={{ minWidth: { xs: "100%", md: 320 }, backgroundColor: "#fff", borderRadius: 2 }}
      aria-label="Open search"
    />
  );
};

export default SearchBar;
