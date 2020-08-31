import React,{Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap';
import {auth,createUserProfileDocument} from '../firebase/firebase-utils';
import {connect} from 'react-redux';
import SignInSignUp from '../pages/SignInAndSignUp/SignInSignUp';
import HomePage from '../pages/homepage/HomePage';
import ShopPage from '../pages/shop/ShopPage';
import Header from './header/Header';
import {setCurrentUser} from '../redux/user/userActions'
import '../styles/App.css';



class App extends Component {
  unsubscrubeFromAuth=null
  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unsubscrubeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          })
        })

      }
      setCurrentUser(userAuth)
    })
  }
  componentWillUnmount(){
    this.unsubscrubeFromAuth()
  }
  render(){
    return (
      <div >
        <Container>
          <Header />
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
const mapDispatchToProps= dispatch =>({
  setCurrentUser: (user)=> dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App);
