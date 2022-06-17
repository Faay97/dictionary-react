import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("beauty");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false)

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  
  function search(event) {
  // documentation : https://dictionaryapi.dev/
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);
  }

 function handlesubmit(event) {
 event.preventDefault()
 search()
}

  function load (){
    setLoaded (true);
    search()
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
    <div className="Dictionary ">
    <section>
      <form onSubmit={handlesubmit}>
        <input type="Search" onChange={handleKeyword} defaultValue="beauty"/>
       
      </form>
      <div className="hint mt-2 fw-lighter">
      suggested words: girl, sunshine, power etc.
      </div>
      </section>
      <Results results={results} />
    </div>
  );
  } else {
    load();
    return null
  }
  
}
