import React,{Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';
import {auth,createUserProfileDocument} from '../firebase/firebase-utils';

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
    this.unsubscrubeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          })
            console.log(this.state)
        })

      }
      this.setState({currentUser:userAuth})
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
