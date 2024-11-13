import React from "react";

function Card({title, description, image}) {
    return <div className="card">
        <img src={image} alt="Preview of Project" />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
}

export default Card;