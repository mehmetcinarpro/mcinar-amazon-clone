import React from 'react';
import './Product.css';

interface ProductProps {
    id: number;
    title: string;
    image: string;
    price: number;
    rating: number;
}
const Product: React.FC<ProductProps> = ({
    id, title, image, price, rating
}) => {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <strong>{price}</strong>
                    <small>€</small>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill(<span></span>)
                            .map((_, i) => (
                                <span key={i}>⭐</span>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button>Add to basket</button>
        </div>
    );
};

export default Product;
