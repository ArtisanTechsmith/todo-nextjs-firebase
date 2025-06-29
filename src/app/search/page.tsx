"use client";
import React, { useEffect, useState } from "react";
import SearchHistory from "@/api/SearchHistory";
import LoadingCircle from "@/core/components/LoadingCircle";
import { Box, FilledInput, TextField, useTheme } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import Accordion from "@/core/components/Accordion";
import TaskCard from "@/core/components/TaskCard";
import SearchInput from "@/core/components/SearchInput";

interface Props {}
const Search = (props: Props) => {
  const theme = useTheme();

  const [loading, setLoading] = useState(false);
  const [searchHistory, setSearchHistory] = useState<SearchHistory[]>([]);

  useEffect(() => {
    fetchScreenData();
  }, []);

  async function fetchScreenData() {
    setLoading(true);
    setSearchHistory(await SearchHistory.fetchSearchHistory(""));
    setLoading(false);
  }

  return (
    <Box sx={{ paddingY: 2 }}>
      <Box sx={{ paddingX: 4 }}>
        <SearchInput endAdornment={<SearchIcon />} />
      </Box>
      <Box sx={{ paddingTop: 2 }}>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 2, marginBottom: 2 }}>
            <LoadingCircle />
          </Box>
        ) : !searchHistory.length ? (
          // Empty search results content
          <Box sx={{ display: "flex", justifyContent: "center" }}>No past searches found</Box>
        ) : (
          // Search results in familiar Accordion layout
          searchHistory.map((item, i) => (
            <Accordion
              key={`search-history-${i}`}
              summary="Recent Searches"
              details={<TaskCard task={item.task} />}
            />
          ))
        )}
      </Box>
    </Box>
  );
};

export default Search;
