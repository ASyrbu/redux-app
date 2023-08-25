import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import millify from 'millify';
import { Button, Card, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { clearCart } from '../store/services/slices/cartSlice';

const { Title } = Typography;

const Cart = () => {
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    const total = cart.reduce((acc, item) => {
        const itemPrice = parseFloat(item.price);
        return acc + itemPrice;
    }, 0);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <Title level={2} className="text-2xl mb-4">
                Your Cart
            </Title>
            <div className="w-full md:w-1/2">
                {cart.map((crypto, index) => (
                    <Card key={index} className="mb-4 p-4 bg-white shadow-md">
                        <Row justify="space-between" align="middle">
                            <Col>
                                <p className="text-lg">{crypto.name}</p>
                            </Col>
                            <Col>
                                <p className="text-lg">$ {millify(crypto.price)}</p>
                            </Col>
                        </Row>
                    </Card>
                ))}
            </div>
            <Card className="mt-4 p-4 bg-white shadow-md w-full md:w-1/2">
                <Row justify="space-between" align="middle">
                    <Col>
                        <p className="text-lg">Total</p>
                    </Col>
                    <Col>
                        <p className="text-lg">Total Cost: ${total.toFixed(2)}</p>
                    </Col>
                </Row>
            </Card>
            <Link to="/" className="mt-3 flex justify-center text-center">
                <Button
                    className="px-8 bg-blue-500 hover:bg-blue-700 text-white rounded-full"
                    onClick={handleClearCart}
                >
                    Очистить Корзину                </Button>
                <Button className="px-8  bg-blue-500 hover:bg-blue-700 text-white rounded-full">
                    На Главную Страницу                </Button>
            </Link>
        </div>
    );
};

export default Cart;