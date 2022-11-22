import React from "react";
import "./App.css";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";

function App() {
  const searchClient = algoliasearch(
    "****************",
    "********************************"
  );

  return (
    <div className="App">
      <InstantSearch
        searchClient={searchClient}
        indexName="index_name"
        // onSearchStateChange={({ query }) => console.log(query)}
      >
        <SearchBox defaultRefinement="" />
        <SearchResult />
      </InstantSearch>
    </div>
  );
}

export default App;
