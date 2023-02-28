import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'
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
const CartHeader = ({
    ProductsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    console.log(productsObject)
    return (
        <div>
            <CartProductList ProductsInCart={ProductsInCart} />
            <CartTotal ProductsInCart={ProductsInCart} />
        </div>
    )
}
export default CartHeader
