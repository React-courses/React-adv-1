import {useState} from "react";
import {Product, ProductInCart} from "../interfaces/ProductInterfaces";


export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({});
    const onProductCountChange = ({count, product}:{count:number, product: Product}) => {
        console.log({count})
        setShoppingCart(oldShopp => {

            if(count === 0){
                const {[product.id]:toDelete, ...rest } = oldShopp;
                return rest
            }

            return {
                ...oldShopp,
                [product.id]: {...product, count}
            }
        })
    }

    return {
        shoppingCart,
        onProductCountChange,
    }
}
