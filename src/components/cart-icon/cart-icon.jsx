import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import classes from './cart-icon.module.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className={classes.cartIcon} onClick={toggleCartHidden}>
            <ShoppingIcon className={classes.shoppingIcon}/>
            <span className={classes.itemCount}>{itemCount}</span>
        </div>
    );
};

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount,
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);