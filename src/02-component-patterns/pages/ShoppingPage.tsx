
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from "../components";
import '../styles/custom-styles.css'


const product = {
    id: '1',
    title: 'coffe mug - card',
    img: './coffee-mug.png'
}

const ShoppingPage = () => {
    return (
        <div>s
            <h1>Shopping store</h1>
            <hr/>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <ProductCard
                    product={product}
                    className="bg-dark text-white"
                >
                    <ProductCard.Image className="custom-image"/>
                    <ProductCard.Title className="text-white text-bold" activeClass="active"/>
                    <ProductCard.Buttons className="custom-buttons"/>
                </ProductCard>

                <ProductCard
                    product={product}
                    className="bg-dark text-white"
                >
                    <ProductImage className="custom-image"/>
                    <ProductTitle
                        title="cafe"
                        className="text-white text-bold"
                        activeClass="active"
                    />
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>

                <ProductCard
                    product={product}
                    style={{
                        background: '#70d1f8'
                    }}
                >
                    <ProductImage
                        className="custom-image"
                        style={{
                            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                        }}
                    />
                    <ProductTitle style={{
                        fontWeight: 'bold'
                    }}/>
                    <ProductButtons
                        style={{
                        display: 'flex',
                        justifyContent: 'end'
                        }}
                    />
                </ProductCard>
            </div>
        </div>
    );
};

export default ShoppingPage;
