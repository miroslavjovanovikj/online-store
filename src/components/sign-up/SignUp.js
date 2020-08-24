import React from 'react';
import FormInput from '../formInput/FormInput';
import CustomButton from '../custom-button/CustomButton';
import '../../styles/sign-up/SignUp.css';
import {auth, createUserProfileDocument} from '../../firebase/firebase-utils';

class SignUp extends Component{
  constructor(props){
    super(props)
    this.state={
      displayName:'',
      email:'',
      password:'',
      confirmPassword:''
    }
  }
  handleSubmit = async e =>{
    e.preventDefault();
  }
  render(){
    const {displayName, email,password,confirmPassword} = this.state
    return(
      <div className="Sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="Sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label='Dsplay Name'
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP<CustomButton/>
        </form>
      </div>
    )
  }
}
export default SignUp;
