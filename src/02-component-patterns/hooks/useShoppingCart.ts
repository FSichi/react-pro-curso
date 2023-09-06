import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

export const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {

        const newShoppingCart = { ...shoppingCart };

        (count === 0)
            ? delete newShoppingCart[product.id]
            : newShoppingCart[product.id] = { ...product, count };

        setShoppingCart(newShoppingCart);
    }

    return {
        shoppingCart,
        onProductCountChange
    }

}