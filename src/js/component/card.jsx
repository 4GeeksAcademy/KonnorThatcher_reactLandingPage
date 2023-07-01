import React from 'react'
import PropType from 'prop-types'

const Card = (props) => {
  const imgStyle = {
    objectFit: "cover",
    width: "100%",
    aspectRatio: "3/2"
  }
  return (
    <div className="card mt-2" >
        <img src={props.imgURL ? props.imgURL : "https://placehold.co/600x400"} className="card-img-top" alt="..." style={imgStyle}/>
        <div className="card-body">
            <h5 className="card-title">{props.cardTitle ? props.cardTitle : 'Card Title'}</h5>
            <p className="card-text">{props.cardText ? props.cardText : 'There is no text. Please put some in, you little goober'}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}
Card.PropType = {
  imgURL: PropType.string,
  cardTitle: PropType.string,
  cardText: PropType.string
}
export default Card