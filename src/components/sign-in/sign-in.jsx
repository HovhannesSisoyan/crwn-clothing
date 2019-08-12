import React, { useState } from 'react';

import './sign-in.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { auth, signInWithGoogle } from '../../firebase/firebase.util';

const SignIn = props => {

    const [userCredentials, setCredentials] = useState({ email: '', password: '', });

    const handleSubmit = async event => {
        event.preventDefault();
        const { email, password, } = userCredentials;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setCredentials({ ...userCredentials, email, password, })
        } catch (error) {
            console.log(error);
        }
        
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value })
    }
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        label='email'
                        value={userCredentials.email}
                        required
                        handleChange={handleChange}
                    />
                    <FormInput
                        name='password'
                        type='password'
                        label='password'
                        value={userCredentials.password}
                        required
                        handleChange={handleChange}
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            Sign in with google{' '}
                        </CustomButton>
                    </div>
                    
                </form>

            </div>
        )
}

export default SignIn;
