type Props = {
    ProductsInCart: {
        [id: number]: number
    }
}
const CartHeader = ({ ProductsInCart }: Props) => {
    return (
        <div>
            {Object.keys(ProductsInCart).map((productId) => (
                <div>
                    {productId} :{ProductsInCart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}
export default CartHeader
