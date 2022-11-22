import React from "react";
import { connectStateResults } from "react-instantsearch-dom";
import { Popover } from "@innovaccer/design-system";

/*
  object searchState,
  object searchResults,
  object allSearchResults,
  object error,
  boolean searching,
  boolean searchingForFacetValues,
  boolean isSearchStalled,
 */

const CustomSearchResult = ({ isSearchStalled, searchResults }) => {
  //If there is no query or no results are found then show nothing
  return (
    !isSearchStalled && (
      <div>
        {console.log(searchResults.query)}
        {searchResults.hits.map((res) => {
          return <div key={res.objectID}>{res.title}</div>;
        })}
      </div>
    )
  );
};

const SearchResult = connectStateResults(CustomSearchResult);

export default SearchResult;
