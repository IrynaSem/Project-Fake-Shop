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
const CartProductList = ({
    ProductsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
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

export default CartProductList
