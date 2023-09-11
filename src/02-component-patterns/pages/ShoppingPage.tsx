// import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/"
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from 'fsdev-product-card'
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {

    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />

            <ProductCard
                key={product.id} product={product}
                initialValues={{
                    count: 4,
                    maxCount: 10,
                }}
            >
                {
                    ({ reset, count, isMaxCountReached, increaseBy, maxCount }) => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButtons />
                        </>
                    )
                }
            </ProductCard>

        </div>
    )
}