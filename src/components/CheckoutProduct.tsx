import React from 'react';
import './CheckoutProduct.css';
import Product from '../models/Product';
import { useStateValue } from '../contexts/StateProvider';
import { ActionType } from '../contexts/reducer';


interface CheckoutProductProps {
    item: Product
}

const CheckoutProduct: React.FC<CheckoutProductProps> = ({
    item
}) => {
    const { state: { basket }, dispatch } = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: ActionType.REMOVE_FROM_BASKET,
            id: item.id
        });
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={item.image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{item.title}</p>

                <p className="checkoutProduct__price">
                    <strong>{item.price}</strong>
                    <small>€</small>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(item.rating)
                            .fill(<span></span>)
                            .map((_, i) => (
                                <span key={i}>⭐</span>
                            ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;
