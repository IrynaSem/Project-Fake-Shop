import productsArray, {
    getProductsObject,
    Product,
} from 'pages/utils/productsArray'
type Props = {
    ProductsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}
const CartTotal = ({
    ProductsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            Total:{' '}
            {Object.keys(ProductsInCart).reduce(
                (total, productId) =>
                    total +
                    productsObject[parseInt(productId)].price *
                        ProductsInCart[parseInt(productId)],
                0
            )}
            $
        </div>
    )
}
export default CartTotal
