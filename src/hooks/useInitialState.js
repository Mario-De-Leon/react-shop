import { useState } from "react";

const initialState = {
    cart: []
}
const useInitialState = () => {

    const [state, setState] = useState(initialState)

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart,payload]
        });
    };
    const removeFromCart = (paylod) => {
        setState({
            ...state, 
            cart: state.cart.filter(items => items.id != paylod.id)
        })
    }
    return{
        state,
        addToCart, 
        removeFromCart
    }
}

export default useInitialState;