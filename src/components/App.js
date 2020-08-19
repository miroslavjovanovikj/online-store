import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';

import SignInSignUp from '../pages/SignInAndSignUp/SignInSignUp';
import HomePage from '../pages/homepage/HomePage';
import ShopPage from '../pages/shop/ShopPage';
import Header from './header/Header';
import '../styles/App.css';


const HatsPage =()=>{
  return(
      <div>hats</div>
  )

}
function App() {
  return (
    <div >
      <Container>
        <Header/>
      </Container>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route  path='/signin' component={SignInSignUp}/>


      </Switch>
    </div>
  );
}

export default App;
