import React,{Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';
import {auth} from '../firebase/firebase-utils';

import SignInSignUp from '../pages/SignInAndSignUp/SignInSignUp';
import HomePage from '../pages/homepage/HomePage';
import ShopPage from '../pages/shop/ShopPage';
import Header from './header/Header';
import '../styles/App.css';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      currentUser:null
    }
  }
  unsubscrubeFromAuth=null
  componentDidMount(){
    this.unsubscrubeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user)
    })
  }
  componentWillUnmount(){
    this.unsubscrubeFromAuth()
  }
  render(){
    return (
      <div >
        <Container>
          <Header currentUser={this.state.currentUser}/>
        </Container>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route  path='/signin' component={SignInSignUp}/>


        </Switch>
      </div>
    );
  }

}

export default App;
