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

export const addToChart = (id) => {
    const findId = product.find(item => item.id === Number(id))
    return {
        type: "ADD_TO_CHART",
        payload: {cart: findId}
    }
}

export const addQty = (id) => {
    const findId = product.find(item => item.id === Number(id))
    return {
        type: "ADD_QTY",
        payload: {cart: findId}
    }
}

export const reduceQty = (id) => {
    const findId = product.find(item => item.id === Number(id))
    return {
        type: "REDUCE_QTY",
        payload: {cart: findId}
    }
}

export const removeItem = (id) => {
    return {
        type: "REMOVE_ITEM",
        payload: id
    }
}