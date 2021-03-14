import React from "react";

const AutocompleteList = (props) => {
  if (props.results.length === 0) {
    return <ul id={'search-results'}></ul>
  }
  return (
    <ul id={'search-results'}>
      {props.results && props.results.map(res =>
        <li>
          <div>
            <img src="https://www.placehold.it/100x100" />
            <p>{res.first_name} {res.last_name}</p>
          </div>
        </li>
      )}
    </ul>
  );
};
export default AutocompleteList;