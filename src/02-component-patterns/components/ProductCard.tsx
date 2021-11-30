import {createContext, CSSProperties, ReactElement} from 'react';
import styles from '../styles/styles.module.css';
import {useProduct} from "../hooks/useProduct";
import {Product, ProductContextProps} from "../interfaces/ProductInterfaces";


export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export interface Props {
    product: Product,
    children?: ReactElement | ReactElement[],
    className?: string,
    style?:  CSSProperties
}

export const ProductCard = ({ product, children, className, style }:Props) => {

    const { counter, increaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {children}
            </div>
        </Provider>
    );
};

