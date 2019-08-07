import React from 'react';

import classes from './cart-item.module.scss'

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => (
    <div className={classes.cartItem}>
        <img src={imageUrl} alt='item'/>
        <div className={classes.itemDetails}>
            <span className={classes.name}>{name}</span>
            <span className={classes.price}>
                {quantity}${price}
            </span>
        </div>
    </div>
);

export default CartItem;