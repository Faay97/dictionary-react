import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    response.data[0];
  }

  //Documentation : https://dictionaryapi.dev/
  function search(event) {
    event.preventDefault();

    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary text-center">
      <form onSubmit={search}>
        <input type="Search" onChange={handleKeyword} />
      </form>
    </div>
  );
}
