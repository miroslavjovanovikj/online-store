import React from 'react';
import {Route, Switch} from 'react-router-dom';
import '../styles/App.css';
import HomePage from '../pages/homepage/HomePage';
const HatsPage =()=>{
  return(
      <div>hats</div>
  )

}
function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;