import React from "react";

const Card = (props) => {
    return(
        <div className="card-div" style={props.style}>
            <img alt={props.img} src={props.img}></img>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button style={props.btn}>Learn More</button>
        </div>
    )
}
export default Card;