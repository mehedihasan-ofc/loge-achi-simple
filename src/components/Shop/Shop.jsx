import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {

        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);

    const handleCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-9 my-4">

                    <h2>Just For You</h2>

                    <div className='row row-cols-1 row-cols-md-3 g-4 py-3'>
                        {
                            products.map(product => <Card

                                key={product.id}
                                product={product}
                                handleCart={handleCart}

                            ></Card>)
                        }
                    </div>

                </div>
                <div className="col-md-3">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;