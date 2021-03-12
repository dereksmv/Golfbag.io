import React from "react";

const AutocompleteList = (props) => {
  if (props.results.length === 0) {
    return <ul id={'search-results'}></ul>
  }
  return (
    <ul id={'search-results'}>
      {props.results.map(res => <li>{res.first_name}</li>)}
    </ul>
  );
};
export default AutocompleteList;