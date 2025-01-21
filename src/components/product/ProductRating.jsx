import { FaRegStar } from "react-icons/fa";
import React from 'react';
const ProductRating = (props) => {
    const rate = Number(props.rate);

    return (
        <div>
            {[...Array(rate)].map((_, index) => (
                <span key={index} style={{fontSize:"30"}}><FaRegStar /></span>
            ))}
        </div>
    );
};

export default ProductRating;
