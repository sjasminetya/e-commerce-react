import product from '../../mock/products.json'

export const getProduct = () => (dispatch) => {
    dispatch({type: "GET_PRODUCT", payload: product})
}