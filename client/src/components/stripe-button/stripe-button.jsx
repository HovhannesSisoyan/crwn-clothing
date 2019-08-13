import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_iLmMyVvyK8QdHJ4H98jd2oSg00PZwJLQ9h';

const onToken = token => {
    axios({
        url: 'payment',
        method: 'post',
        data: {
            amount: priceForStripe,
            token,
        }
    }).then(response => { 
        alert('Payment Successful');
    }).catch(error => {
        // console.log('Payment error: ', JSON.parse(error));
        alert('There was an issue with your payment');
    })
}

return (
    <StripeCheckout 
        label='Pay Now'
        name='CRWN Clothig Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    />
)
}

export default StripeCheckoutButton;