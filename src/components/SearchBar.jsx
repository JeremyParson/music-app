import React, { useState } from "react";

function SearchBar(props) {
  let [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (value) => {
    setSearchTerm(value)
    props.setSearch(searchTerm)
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Enter a song title..."
        onChangeCapture={(e) => handleSubmit(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default SearchBar;
