import React from 'react';
import {Route, Switch} from 'react-router-dom';
import '../styles/App.css';
import HomePage from '../pages/homepage/HomePage';
import ShopPage from '../pages/shop/ShopPage';
import Header from './header/Header';
import {Container,Row,Col} from 'react-bootstrap';
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

      </Switch>
    </div>
  );
}

export default App;
