import {ProductCard as ProductCardHOC} from "./ProductCard";
import {ProductTitle} from "./ProductTitle";
import {ProductImage} from "./ProductImage";
import {ProductButtons} from "./ProductButtons";
import {ProductoCardHOCProps} from "../interfaces/ProductInterfaces";

export {ProductButtons} from "./ProductButtons";
export {ProductTitle} from "./ProductTitle";
export {ProductImage} from "./ProductImage";
// export {ProductCard} from "./ProductCard";

export const ProductCard: ProductoCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
})
