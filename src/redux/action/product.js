import product from '../../mock/products.json'

export const getProduct = () => {
    return {
        type: "GET_PRODUCT",
        payload: product
    }
}