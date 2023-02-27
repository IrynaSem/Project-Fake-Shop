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
            {Object.keys(ProductsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[parseInt(productId)].title} : {''}
                    {ProductsInCart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}
export default CartHeader
