import React, { createContext, useContext, useMemo } from "react";
import appendices from "../data/appendices.json";

const SearchContext = createContext();

const normalize = (value) => value.toLowerCase();

const flattenContent = (appendix) => {
  const sectionText = appendix.sections
    ?.map((section) => `${section.title} ${section.body?.join(" ") ?? section.body}`)
    .join(" ");
  const keywordText = appendix.keywords?.join(" ");
  const goalText = appendix.goal ?? "";
  return `${appendix.title} ${goalText} ${sectionText} ${keywordText}`;
};

export const SearchProvider = ({ children }) => {
  const index = useMemo(() => {
    return appendices.map((appendix) => ({
      ...appendix,
      searchText: normalize(flattenContent(appendix))
    }));
  }, []);

  const search = (query) => {
    if (!query) return [];
    const normalized = normalize(query);
    return index
      .filter((item) => item.searchText.includes(normalized))
      .map((item) => {
        const sectionMatch = item.sections?.find((section) =>
          normalize(`${section.title} ${section.body?.join(" ") ?? section.body}`).includes(normalized)
        );
        return {
          id: item.id,
          title: item.title,
          goal: item.goal,
          section: sectionMatch || item.sections?.[0],
          query: normalized
        };
      });
  };

  return <SearchContext.Provider value={{ search }}>{children}</SearchContext.Provider>;
};

export const useSearch = () => useContext(SearchContext);
