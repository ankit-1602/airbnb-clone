import React from 'react'
import './card.css'
function Card({src,title,description,price}) {
    return (
        <div>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Card
