import { actionTypes } from "../actions/cart.actions"

export const cartInitialState = {
    cartItems: [],
}

export function cartReducer(state, { type, payload = {} }) {
    const { idDrink } = payload

    let drinkInCart = state.cartItems.find((item) => item.idDrink === idDrink)
    switch (type) {
        case actionTypes.ADD_TO_CART:
            // saber si el producto a agregar esta en el cart
            if (drinkInCart) {
                // afirmativo, incrementar la cantidad +1
                let cartItemUpdated = state.cartItems.map(item => {
                    if (item.idDrink === idDrink) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }
                    return item
                })
                return {
                    ...state,
                    cartItems: cartItemUpdated
                }
            } else {
                // negativo, agregamos el producto con cantidad 1
                payload.quantity = 1
                return {
                    ...state,
                    cartItems: [...state.cartItems, payload]
                }
            }
        case actionTypes.REMOVE_ONE_FROM_CART:
            // Existe el producto en el carrito?
            if (drinkInCart.quantity > 1) {
                // Quantity > 1? -> restar 1
                let cartItemUpdated = state.cartItems.map(item => {
                    if (item.idDrink === idDrink) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        }
                    }
                    return item
                })
                return {
                    ...state,
                    cartItems: cartItemUpdated
                }
            } else {
                // Quantity < 1 -> quitar del carrito
                let cartItemUpdated = state.cartItems.filter(item => item.idDrink !== idDrink)

                return {
                    ...state,
                    cartItems: cartItemUpdated
                }
            }
        case actionTypes.REMOVE_ALL_FROM_CART:
            if (drinkInCart) {
                let cartItemUpdated = state.cartItems.filter(item => item.idDrink !== idDrink)
                return {
                    ...state,
                    cartItems: cartItemUpdated
                }
            }
            return state
        case actionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
    }
}