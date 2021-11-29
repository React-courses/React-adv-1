import {createContext} from 'react';
import styles from '../styles/styles.module.css';
import {useProduct} from "../hooks/useProduct";
import {ProductCardProps, ProductContextProps} from "../interfaces/ProductInterfaces";


export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export const ProductCard = ({ product, children }:ProductCardProps) => {

    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>
    );
};

