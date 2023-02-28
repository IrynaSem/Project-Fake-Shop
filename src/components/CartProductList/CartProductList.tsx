import productsArray, {
    getProductsObject,
    Product,
} from 'pages/utils/productsArray'
import CartProductListItem from './CartProductListItem'

type Props = {
    ProductsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
    CartItem?: any
}
const CartProductList = ({
    ProductsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
}: Props) => {
    return (
        <>
            {Object.keys(ProductsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    productCount={ProductsInCart[parseInt(productId)]}
                />
            ))}
        </>
    )
}

export default CartProductList
