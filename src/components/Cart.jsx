import React from 'react';
import { useSelector } from 'react-redux';
import millify from 'millify';
import { Button, Card, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import "./Cartstyle.css"

const { Title } = Typography;

const Cart = () => {
    const cart = useSelector(state => state.cart.cart);

    const total = cart.reduce((acc, item) => {
        const itemPrice = parseFloat(item.price);
        return acc + itemPrice;
    }, 0);
    return (
        <div className="cart-container">
            <Title level={2} className="cart-title">
                Your Cart
            </Title>
            {cart.map(crypto => (
                <Card key={crypto.uuid} className="cart-item">
                    <Row>
                        <Col span={12}>
                            <p>{crypto.name}</p>
                        </Col>
                        <Col span={12}>
                            <p>$ {millify(crypto.price)} </p>
                        </Col>
                    </Row>
                </Card>
            ))}
            <Card className="cart-total">
                <Row>
                    <Col span={12}>
                        <p>Итого</p>
                    </Col>
                    <Col span={12}>
                        <p>Общая Стоимость: ${total.toFixed(1)}</p>
                    </Col>
                </Row>
            </Card>
            <Link to="/">
                <Button className="cart-button px-8" type="primary">
                    Вернуться на Главную
                </Button>
            </Link>
        </div>
    );
};

export default Cart;
