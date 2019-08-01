import React from 'react';

import './sign-in.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { auth, signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends React.Component {
    state = {
        email: '',
        password: '',
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
        
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        label='email'
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        name='password'
                        type='password'
                        label='password'
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            Sign in with google{' '}
                        </CustomButton>
                    </div>
                    
                </form>

            </div>
        )
    }
}

export default SignIn;
