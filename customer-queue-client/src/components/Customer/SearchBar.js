import React from 'react';
import {DebounceInput} from 'react-debounce-input';

const SearchBar = ({input:keyword, onChange:setKeyword})  => {
  const SearchStyle = {
    width:"20rem",
    background:"#F2F1F9", 
    border: "none", 
    padding:"0.5rem", 
    textAlign: "center"
  };
  return (
    <DebounceInput
      style={SearchStyle}
      key="random1"
      value={keyword}
      debounceTimeout={800}
      placeholder={"Search Customer Name"}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar