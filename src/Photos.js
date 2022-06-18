import React from "react"

export default function Photos (props){
    if(props.photos){
        return (
        <section className="Photos ">
        <div className="row"> 
                {props.photos.map(function (photo, index) {
                    return (
                    <div className="col-3" key={index}>
                    <a href={photo.src.original} rel="noreferrer" target="_blank">
                    <img src={photo.src.tiny} alt="searched word" className="img-fluid rounded" />
                    </a>
                    </div>
                    )
                })} 
               </div> 
            </section>
        )
       
    } else {
        return null
    }

    
}