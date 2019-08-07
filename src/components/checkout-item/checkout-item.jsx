import React from 'react';
import { connect } from 'react-redux';

import classes from './checkout-item.module.scss';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    
    const { name, imageUrl, price, quantity } = cartItem;
    
    return (
        <div className={classes.checkoutItem}>
            <div className={classes.imageContainer}>
                <img src={imageUrl} alt='item' />
            </div>
            <span className={classes.name}>{name}</span>
            <span className={classes.quantity}>
                <div className={classes.arrow} onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className={classes.value}>{quantity}</span>
                <div className={classes.arrow} onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className={classes.price}>{price}</span>
            <div className={classes.removeButton} onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)), 
})

export default connect(null, mapDispatchToProps)(CheckoutItem);