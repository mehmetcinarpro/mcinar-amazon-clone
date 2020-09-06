import React from 'react';
import './Subtotal.css';
import { useStateValue } from '../contexts/StateProvider';
import { getBasketTotal } from '../contexts/reducer';

const Subtotal: React.FC = () => {
    const { state: { basket } } = useStateValue();
    return (
        <div className="subtotal">
            <p>
                Subtotal ({basket.length} items): <span>{getBasketTotal(basket)}</span>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
            </small>
            <button>Proceed checkout</button>
        </div >
    );
};

export default Subtotal;
