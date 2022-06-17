import React from "react";
import "./Phonetics.css"

export default function Phonetics(props){
    if (props.phonetics.audio) {
        return (
        <div className="Phonetic">
        <a href={props.phonetics.audio} target="_blank" rel="noopener noreferrer">
        Listen </a>
        
        {props.phonetics.text}
        </div>
    )
    } else {
        return <div className="phonetic-text"> {props.phonetics.text} </div>
    }
    
}