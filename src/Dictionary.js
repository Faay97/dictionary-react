import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  function search(event) {
    event.preventDefault();
    alert(keyword);
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
