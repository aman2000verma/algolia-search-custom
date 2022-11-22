import React from "react";
import { Input } from "@innovaccer/design-system";
import { connectSearchBox } from "react-instantsearch-dom";

const CustomSearchBox = ({ currentRefinement, refine }) => (
  <Input
    type="text"
    value={currentRefinement}
    onChange={(event) => refine(event.currentTarget.value)}
  />
);

const SearchBox = connectSearchBox(CustomSearchBox);

export default SearchBox;
