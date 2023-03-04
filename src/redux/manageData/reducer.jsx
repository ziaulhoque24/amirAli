import {
  CART_DATA,
  DECREMENT_DATA,
  INCREASE_DATA,
  INCREMENT_DATA,
} from "./actionTypes"
import initialState from "./initialState"

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_DATA:
      const findProductExistingIndex = state.findIndex(
        (product) => product.id === action.payload.id
      )

      if (findProductExistingIndex !== -1) {
        state.map((product, index) => {
          if (index === findProductExistingIndex) {
            return { ...product, qty: product.qty - 1,  cartQty: product.cartQty +1 }
          } else return product
        })
      } else
        return [
          ...state,
          {
            ...action.payload, cartQty: 1,
          },
        ]

    // case INCREASE_DATA:
    //   // console.log("Add Cart :", action)
    //   return state.map((product) =>product.id === action.payload.id  ? 
    //    { ...product, cartQty: product.cartQty + 1 } :  product )

    case INCREMENT_DATA:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, cartQty: product.cartQty + 1 }
        } else return product
      })

    case DECREMENT_DATA:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, cartQty: product.cartQty - 1 }
        } else return product
      })

    default:
      return state
  }
}

export default reducer
