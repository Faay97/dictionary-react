import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  // documentation : https://dictionaryapi.dev/
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
        <input type="Submit" className="btn btn-dark" />
      </form>
      <Results results={results} />
    </div>
  );
}
