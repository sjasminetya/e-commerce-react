const initialState = {
    listProduct: [],
    detailProduct: [],
    cart: []
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
            cart: findProduct === undefined ?  [...state.cart, {...action.payload.cart, qty: 1}] : state.cart.map(item => item.id === Number(action.payload.cart.id) ? {...item, qty: item.qty + 1} : item)
        }
    } else if (action.type === 'ADD_QTY') {
        return {
            ...state,
            cart: state.cart.map(item => item.id === Number(action.payload.cart.id) ? {...item, qty: item.qty + 1} : item)
        }
    } else if (action.type === 'REDUCE_QTY') {
        return {
            ...state,
            cart: state.cart.map(item => item.id === Number(action.payload.cart.id) ? item.qty < 1 ? item.qty = 0 : {...item, qty: item.qty - 1} : item)
        }
    }
    else {
        return state
    }
}

export default productReducer