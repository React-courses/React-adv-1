
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from "../components";
import '../styles/custom-styles.css'
import {useShoppingCart} from "../hooks/useShoppingCart";
import {productos} from "../data/products";


const ShoppingPage = () => {

    const {shoppingCart, onProductCountChange} = useShoppingCart();

    return (
        <div>
            <h1>Shopping store</h1>
            <hr/>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {
                    productos.map(prod => (
                        <ProductCard
                            key={prod.id}
                            product={prod}
                            className="bg-dark text-white"
                            onChange={onProductCountChange}
                            value={shoppingCart[prod.id]?.count || 0}
                        >
                            <ProductImage className="custom-image"/>
                            <ProductTitle
                                title={prod.title}
                                className="text-white text-bold"
                                activeClass="active"
                            />
                            <ProductButtons className="custom-buttons"/>
                        </ProductCard>
                    ))
                }
            </div>

            <div className="shopping-cart">
                    {
                    Object.values(shoppingCart).map(prod =>
                        prod.count >0 &&
                        (<ProductCard
                            key={prod.id}
                            product={prod}
                            className="bg-dark text-white"
                            style={{
                                width: '100px'
                            }}
                            onChange={onProductCountChange}
                            value={prod.count}
                        >
                            <ProductImage className="custom-image"/>
                            <ProductButtons
                                className="custom-buttons"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>)
                    )
                }
            </div>
            {/*<div><code>{JSON.stringify(shoppingCart, null, 5)}</code></div>*/}
        </div>
    );
};

export default ShoppingPage;
