export const changeRupiah = (price) => {
    return new Intl.NumberFormat(['ban', 'id']).format(price)
}