import {createContext, CSSProperties, ReactElement} from 'react';
import styles from '../styles/styles.module.css';
import {useProduct} from "../hooks/useProduct";
import {onChangeArgs, Product, ProductContextProps} from "../interfaces/ProductInterfaces";


export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export interface Props {
    product: Product,
    children?: ReactElement | ReactElement[],
    className?: string,
    style?:  CSSProperties,
    onChange?: (args: onChangeArgs) => void;
    value?: number
}

export const ProductCard = ({ product, children, className, style, onChange, value}:Props) => {

    const { counter, increaseBy } = useProduct({onChange, product, value});

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

