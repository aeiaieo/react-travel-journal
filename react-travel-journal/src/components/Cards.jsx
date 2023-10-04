import React from "react"

export default function Cards(props){
    return (
        <div className="cards">
            <img 
                src={`./images/${props.coverImg}`} 
                className="card--image" 
            />
            <div>
                <div className="inline">
                    <span><i className="fa-solid fa-map-pin headBar"></i></span>
                    <span><p>{props.location} <a href={props.mapsUrl} target="_blank">View on Google Maps</a></p></span>
                </div>
                <h2>{props.title}</h2>
                <span><h3>{props.arrival} - {props.departure}</h3></span>
                <p className="desc">{props.description}</p>
            </div>

            
        </div>
    )
}