import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Card.css";

const Card = (props) => {

    const handleCart = props.handleCart;

    const { img, name, price, ratings } = props.product;

    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top img-card" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: ${price}</p>
                    <p className="card-text">Rating: {ratings} Star</p>
                </div>
                <div className="card-footer text-center">
                    <button onClick={() => handleCart(props.product)} className='btn btn-danger'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
                </div>
            </div>
        </div>
    );
};

export default Card;