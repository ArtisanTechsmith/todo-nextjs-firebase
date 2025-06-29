"use client";
import React from "react";
import { Divider, FilledInput, List, ListItem, Paper, useTheme } from "@mui/material";
import styles from "./styles/search/search-input.module.scss";
import { Box } from "@mui/system";
import SearchHistory from "@/api/SearchHistory";
import { useDebouncedCallback } from "use-debounce";
import LoadingCircle from "@/core/components/LoadingCircle";
import SearchResult from "@/core/components/SearchResult";

interface Props {
  endAdornment?: React.ReactNode;
}
const SearchInput = (props: Props) => {
  const theme = useTheme();
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<SearchHistory[]>([]);

  // Simple store of reused style within this context in "sx" property
  const sxBorderRadius = "32px";

  // Use a debounced search to avoid sending requests for every change
  // Wait 400ms after user finishes typing before sending the search request
  const handleDebouncedSearch = useDebouncedCallback((v: string) => {
    querySearchHistory(v);
  }, 400);

  // Issue a search request to the "SearchHistory" API endpoint
  function querySearchHistory(searchInput: string) {
    setLoading(true);
    SearchHistory.fetchSearchHistory(searchInput)
      .then((r) => setSearchResults(r))
      .finally(() => setLoading(false));
  }

  return (
    <div className={styles.searchInputWrapper}>
      <FilledInput
        value={search}
        onChange={(v) => {
          setSearch(v.target.value);
          handleDebouncedSearch(v.target.value);
        }}
        placeholder="Search..."
        className={styles.searchInput}
        sx={{
          borderRadius: sxBorderRadius,
          "&.MuiInputBase-root::before,&.Mui-focused::after": {
            borderBottom: "none !important",
          },
          backgroundColor: theme.palette.secondary.light,
          "&:hover, &:focus-within": {
            backgroundColor: theme.palette.secondary.light,
            filter: "brightness(98%)",
          },
        }}
        endAdornment={props.endAdornment}
      />
      <div className={styles.searchInputExpandedDivider}>
        <Divider
          sx={{
            borderTopWidth: "1px",
            borderColor: `${theme.palette.secondary.contrastText} !important`,
          }}
        />
      </div>
      <Box className={styles.searchInputExpandedWrapper}>
        <Paper
          className={styles.searchInputExpanded}
          elevation={0}
          sx={{
            overflow: "hidden",
            borderRadius: "0.1px",
            borderBottomLeftRadius: sxBorderRadius,
            borderBottomRightRadius: sxBorderRadius,
          }}
        >
          {loading ? (
            <Box
              className={styles.searchLoadingWrapper}
              sx={{
                backgroundColor: theme.palette.secondary.light,
              }}
            >
              <LoadingCircle />
            </Box>
          ) : !searchResults.length ? (
            <Box
              className={styles.searchNoResults}
              sx={{
                backgroundColor: theme.palette.secondary.light,
              }}
            >
              No results. Try adjusting your search.
            </Box>
          ) : (
            <List
              sx={{
                overflow: "hidden",
                padding: 0,
                "& li": {
                  padding: 0,
                },
              }}
            >
              {searchResults.map((r, i) => (
                <ListItem key={`search-results-${i}`}>
                  <SearchResult task={r.task} />
                </ListItem>
              ))}
            </List>
          )}
        </Paper>
      </Box>
    </div>
  );
};

export default SearchInput;
