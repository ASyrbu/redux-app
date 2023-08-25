import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/services/slices/cartSlice';
import { removeFromCart } from '../store/services/slices/cartSlice';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { Button } from 'antd';

import { useGetCryptosQuery } from '../store/services/cryptoApi';
import Loader from './Loader';

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState();
    const [searchTerm, setSearchTerm] = useState('');
    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        setCryptos(cryptosList?.data?.coins);

        const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

        setCryptos(filteredData);
    }, [cryptosList, searchTerm]);

    if (isFetching) return <Loader />;

    return (
        <>
            {!simplified && (
                <div className="search-crypto">
                    <Input
                        placeholder="Search Cryptocurrency"
                        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                    />
                </div>
            )}
            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((currency) => (
                    <Col
                        xs={24}
                        sm={12}
                        lg={6}
                        className="crypto-card"
                        key={currency.uuid}
                    >
                        <Card
                            title={`${currency.rank}. ${currency.name}`}
                            extra={<img className="crypto-image" src={currency.iconUrl} alt='logo' />}
                            hoverable
                        >
                            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>

                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {currency.change}%</p>
                            </Link>
                            <Button
                                onClick={() => dispatch(addToCart(currency))}
                                aria-label={
                                    cart.some(item => item.uuid === currency.uuid)
                                        ? 'В Корзине (Добавить ещё)'
                                        : 'Купить'
                                }
                            >
                                {cart.some(item => item.uuid === currency.uuid) ? 'В Корзине (Добавить ещё)' : 'Купить'}
                            </Button>
                            <Button
                                onClick={() => dispatch(removeFromCart(currency))}
                                disabled={!cart.some(item => item.uuid === currency.uuid)}
                                aria-label="Удалить из Корзины"
                            >
                                Удалить из Корзины
                            </Button>
                        </Card>

                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Cryptocurrencies;