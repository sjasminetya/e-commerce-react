import product from '../../mock/products.json'

export const getProduct = () => {
    return {
        type: "GET_PRODUCT",
        payload: product
    }
}

export const detailProduct = (id) => {
    const load = []
    product.map(item => load.push(item))
    const findId = load.find(item => item.id === Number(id))
    
    return {
        type: "DETAIL_PRODUCT",
        payload: {detail: findId}
    }
}

export const addToChart = (data) => (dispatch) => {
    const load = []
    product.map(item => load.push(item))
    const findId = load.find(item => item.id === Number(data.id))
    dispatch({type: "ADD_TO_CHART", payload: {chart: {...data, qty: 1} }})
    console.log(findId)
}