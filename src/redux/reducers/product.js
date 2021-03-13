const initialState = {
    listProduct: [],
    detailProduct: [],
    cart: [],
    readyBuy: []
}

const productReducer = (state = initialState, action) => {
    if (action.type === 'GET_PRODUCT') {
        return {
            ...state,
            listProduct: action.payload
        }
    } else if (action.type === 'DETAIL_PRODUCT') {
        return {
            ...state,
            detailProduct: action.payload.detail
        }
    } else if (action.type === 'ADD_TO_CHART') {
        const findProduct = state.cart.find(item => item.id === Number(action.payload.cart.id) ? true : false)
        return {
            ...state,
            cart: findProduct === undefined ?  [...state.cart, {...action.payload.cart, qty: 1, isChecked: false}] : state.cart.map(item => item.id === Number(action.payload.cart.id) ? {...action.payload.cart, qty: item.qty + 1} : item)
        }
    } else if (action.type === 'EMPTY_CART') {
        return {
            ...state,
            cart: action.payload.cart
        }
    } else if (action.type === 'READY_BUY') {
        const findProduct = state.readyBuy.find(item => item.id === Number(action.payload.buy.id) ? true : false)
        const findCart = state.cart.find(item => item.id === Number(action.payload.buy.id) ? true : false)
        return {
            ...state,
            readyBuy: findProduct === undefined ?  [...state.readyBuy, {...findCart, isChecked: true}] : state.readyBuy.map(item => item.id === Number(action.payload.buy.id) ? {...item, qty: item.qty + 1} : item)
        }
    } else if (action.type === 'REDUCE_READY_BUY') {
        return {
            ...state,
            readyBuy: state.readyBuy.filter(item => item.id !== Number(action.payload))
        }
    } else if (action.type === 'EMPTY_READY_BUY') {
        return {
            ...state,
            readyBuy: action.payload.buy
        }
    } else if (action.type === 'ADD_QTY') {
        return {
            ...state,
            cart: state.cart.map(item => item.id === Number(action.payload.cart.id) ? {...item, qty: item.qty + 1} : item),
            readyBuy: state.readyBuy.map(item => item.id === Number(action.payload.buy.id) ? {...item, qty: item.qty + 1} : item)
        }
    } else if (action.type === 'REDUCE_QTY') {
        return {
            ...state,
            cart: state.cart.map(item => item.id === Number(action.payload.cart.id) ? item.qty <= 0 ? item.qty = 1 : {...item, qty: item.qty - 1} : item),
            readyBuy: state.readyBuy.map(item => item.id === Number(action.payload.buy.id) ? item.qty <= 0 ? item.qty = 0 : {...item, qty: item.qty - 1} : item)
        }
    } else if (action.type === 'REMOVE_ITEM') {
        return {
            ...state,
            cart: state.cart.filter(item => item.id !== Number(action.payload))
        }
    } else {
        return state
    }
}

export default productReducer