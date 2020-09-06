import React from 'react';
import './Checkout.css';
import { useStateValue } from '../contexts/StateProvider';
import CheckoutProduct from '../components/CheckoutProduct';
import Subtotal from '../components/Subtotal';

const Checkout: React.FC = () => {
    const { state: { basket } } = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/08/marketing/prime/contenttesting/Time_Beam_France._CB430656900_.png" alt="" />
                {basket.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item</p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your Shopping Basket</h2>
                            {basket.map(item => (
                                <CheckoutProduct item={item} />
                            ))}
                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    );
};

export default Checkout;
