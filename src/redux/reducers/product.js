const initialState = {
    listProduct: [],
    detailProduct: [],
    chart: []
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
        return {
            ...state,
            chart: [...state.chart, action.payload.chart]
        }
    }
    else {
        return state
    }
}

export default productReducer