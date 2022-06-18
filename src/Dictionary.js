import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos"
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("beauty");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response){
  setPhotos(response.data.photos)
  }
  
  function search(event) {
  // documentation : https://dictionaryapi.dev/
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(handleResponse);


    const pexelsApiKey = `563492ad6f917000010000019812b09499b94e1389651e844fe3cbf0`
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`
    let headers = { Authorization: `Bearer ${pexelsApiKey}` }

    axios.get(pexelsUrl, {
      headers: headers
    }).then(handlePexelsResponse)
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
      <Photos photos={photos}/>
    </div>
  );
  } else {
    load();
    return null
  }
  
}
