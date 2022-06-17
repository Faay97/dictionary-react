import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms mt-3">
        {props.synonyms.map(function (synonym, index) {
          return (
            <li key={index}>
             <strong> <em className="text-muted mt-2"> {synonym} </em> </strong>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
