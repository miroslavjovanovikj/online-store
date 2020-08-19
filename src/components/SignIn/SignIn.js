import React,{Component} from 'react';
import '../../styles/sign-in/SignIn.css'
import FormInput from '../formInput/FormInput';
import CustomButton from '../custom-button/CustomButton'
class SignIn extends Component{
  constructor(props){
    super(props)
    this.state={
      email:'',
      password:''
    }
    this.handleSubmit= this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(e){
    e.preventDefault()
    this.setState({email:'',password:''})
  }
  handleChange(e){
    const {value,name} = e.target;
    this.setState({[name]:value})
  }
  render(){
    return(
      <div className="SignIn">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              label="email"
              handleChange={this.handleChange}
              value={this.state.email}
            />
            <FormInput
              type="password"
              name="password"
              label="password"
              handleChange={this.handleChange}
              value={this.state.password}
            />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    )
  }
}
export default SignIn;
