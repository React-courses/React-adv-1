import {ProductCard, ProductImage, ProductTitle, ProductButtons} from "../components";
import '../styles/custom-styles.css'
import {productos} from "../data/products";

const product = productos[0]

const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping store</h1>
            <hr/>

            <div>

                <ProductCard
                    key={product.id}
                    product={product}
                    className="bg-dark text-white"
                    initialValues = {{
                        count: 4,
                        maxCount: 10,
                    }}
                >
                    {
                        ({reset, increaseBy, isMaxCountReach, count}) => (
                            <>
                                <ProductImage className="custom-image"/>
                                <ProductTitle className="text-white text-bold"/>
                                <ProductButtons className="custom-buttons"/>

                                <button onClick={reset}>reset</button>
                                <button onClick={() => increaseBy(-2)}>-2</button>
                                <button disabled={isMaxCountReach} onClick={() => increaseBy(+2)}>+2</button>
                                <span>{count}</span>

                                {/*<code>{JSON.stringify(args)}</code>*/}
                            </>
                        )
                    }
                </ProductCard>
            </div>
        </div>
    );
};

export default ShoppingPage;
