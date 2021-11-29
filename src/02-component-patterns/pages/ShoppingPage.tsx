import React from 'react';
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from "../components";


const product = {
    id: '1',
    title: 'coffe mug - card',
    img: './coffee-mug.png'
}

const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping store</h1>
            <hr/>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product}>
                    <ProductImage/>
                    <ProductTitle title="cafe"/>
                    <ProductButtons />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title/>
                    <ProductCard.Buttons />
                </ProductCard>
            </div>
        </div>
    );
};

export default ShoppingPage;
