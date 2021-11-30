import {useState} from "react";
import {Product, ProductInCart} from "../interfaces/ProductInterfaces";


export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({});
    const onProductCountChange = ({count, product}:{count:number, product: Product}) => {
        console.log({count})
        setShoppingCart(oldShopp => {

            const productInCard: ProductInCart = oldShopp[product.id] || {...product, count: 0}
            if(Math.max(productInCard.count + count, 0) > 0)  {
                productInCard.count += count;
                return {
                    ...oldShopp,
                    [product.id]: productInCard
                }
            }

            //borrar el producto
            const {[product.id]:toDelete, ...rest } = oldShopp;
            return rest;

            // if(count === 0){
            //     const {[product.id]:toDelete, ...rest } = oldShopp;
            //     return rest
            // }
            //
            // return {
            //     ...oldShopp,
            //     [product.id]: {...product, count}
            // }
        })
    }

    return {
        shoppingCart,
        onProductCountChange,
    }
}
