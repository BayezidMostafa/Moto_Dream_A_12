import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHKEY);
console.log(stripePromise);

const Payment = () => {
    const order = useLoaderData()
    const navigation = useNavigation()
    console.log(navigation);
    const { product_name, price, bookingId } = order;
    console.log(bookingId);
    return (
        <div>
            <p className='text-3xl text-center font-semibold'>Please Pay {price} for your {product_name} </p>
            <div className='w-1/3 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm order={order} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;