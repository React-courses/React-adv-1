import {ReactElement} from "react";
import {Props as ProductCardProps} from "../components/ProductCard";
import {ProductTitleProps} from "../components/ProductTitle";
import {ProductImageProps} from "../components/ProductImage";
import {Props as ProductButtonProps} from "../components/ProductButtons";

export interface Product {
    id: string,
    title: string,
    img?: string,
}

export interface ProductContextProps {
    counter: number,
    product: Product,
    increaseBy: (value: number) => void,
    maxCount?: number
}

export interface ProductoCardHOCProps {
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props: ProductButtonProps) => JSX.Element,
    ({product, children}: ProductCardProps): JSX.Element,
    //Props es lo q mandamos de los componentes.
}

export interface onChangeArgs {
    product: Product,
    count: number,
}

export interface ProductInCart extends Product{
    count: number,
}

export interface InitialValues {
    count?: number,
    maxCount?: number
}

export interface ProductCardHandlers {
    count: number,
    isMaxCountReach: boolean,
    maxCount?: number,
    product: Product,
    increaseBy: (value:number) => void,
    reset: () => void,
}
