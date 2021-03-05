const initialState = {
    listProduct: []
}

const productReducer = (state = initialState, action) => {
    if (action.type === 'GET_PRODUCT') {
        return {
            ...state,
            listProduct: action.payload
        }
    } else {
        return state
    }
}

export default productReducer