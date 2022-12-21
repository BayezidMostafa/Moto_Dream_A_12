import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Input, Textarea } from '@material-tailwind/react';
import { toast } from 'react-hot-toast';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_4h4ufyi', 'template_7hk7v4r', form.current, 'HTs7vzUbkC-Gb_rYU')
            .then((result) => {
                console.log(result.text);
                toast.success('Email Send Successfully')
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact' className='my-20 container mx-auto'>
            <div>
                <p style={{ textShadow: "0 0 3px teal" }} className='text-4xl text-center font-bold mb-10 dark:text-gray-300'>Contact</p>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-16'>
                <form className='text-white' ref={form} onSubmit={sendEmail}>
                    <div className=''>
                        <Input type='text' name="user_name" color="teal" label="Your Name" />
                    </div>
                    <div className='mt-3'>
                        <Input type='email' name="user_email" color='teal' label='Email' />
                    </div>
                    <div className='mt-3'>
                        <Textarea label='Message' color='teal' name="message" />
                    </div>
                    <Button variant='gradient' fullWidth color='teal' type='submit' size='lg' className='text-white mt-2'>Send</Button>
                </form>
                <div className='mt-5 md:mt-0'>
                    <p style={{ textShadow: "0 0 3px teal" }} className='mb-3 text-2xl md:text-3xl lg:text-4xl font-bold dark:text-gray-300'>Have some queries or suggestions?</p>
                    <div className='flex gap-2'>
                        <p className='text-justify text-[1.1rem] dark:text-gray-300'>Any questions are welcome! Also, don't forget to let us know if you have any recommendations for our business. We'll do everything we can to improve our services as well.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};