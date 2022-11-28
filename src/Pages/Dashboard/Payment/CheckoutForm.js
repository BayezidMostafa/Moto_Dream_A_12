import { Button } from '@material-tailwind/react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CheckoutForm = ({ order }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionID, setTransactionID] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();
    const { price, email, name, _id, bookingId, product_name } = order;
    console.log(order);

    useEffect(() => {
        fetch("https://a-12-server-side.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('moto-token')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            console.log('card info', card);
            const paymentData = {
                price,
                transactionID: paymentIntent.id,
                email,
                orderId: _id,
                product_name,
                customer_Name:name
            }
            fetch('https://a-12-server-side.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('moto-token')}`
                },
                body: JSON.stringify(paymentData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        fetch(`https://a-12-server-side.vercel.app/updateproductstatus/${bookingId}`, {
                            method: "PUT",
                            headers: {
                                'content-type':'application/json',
                                authorization: `Bearer ${localStorage.getItem('moto-token')}`
                            }
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            toast.success('Thanks For The Payment, Ride Safe')
                            setSuccess('Thanks For The Payment, Ride Safe');
                            setTransactionID(paymentIntent.id);
                        })
                    }
                })
        }
        setProcessing(false);


    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <Button
                    className=''
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </Button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your transactionId: <span className='font-bold'>{transactionID}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;