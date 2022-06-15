import React from "react";

export default function Phonetics(props){
    if (props.phonetics.audio) {
        return (
        <div className="Phonetic">
        <a href={props.phonetics.audio} target="_blank" rel="noopener noreferrer">
        Listen </a>
        <br />
        {props.phonetics.text}
        </div>
    )
    } else {
        return <div> {props.phonetics.text}, {null} </div>
    }
    
}