import CartActionTypes from './cartTypes'

const initialState ={
  hidden:true
}

const cartReducer =(state=initialState, action)=>{
  switch(action.type){
    case CartActionTypes.TOOGLE_CART_HIDDEN:
    return{
      ...state,
      hidden:!state.hidden
    }
    default:
    return state
  }
}
export default cartReducer;
