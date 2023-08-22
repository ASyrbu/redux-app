import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space, Divider } from 'antd';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from './hooks/use-auth';
import { Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import { removeUser } from './store/services/slices/userSlice';
import './App.css';

const Principal = () => {
    const dispatch = useDispatch();

    const { isAuth, email } = useAuth();

    return isAuth ? (
        <div>
            {/* <div className="app">
                <div className="navbar">

                    <Navbar />

                </div>
                <div className="main">
                    <Layout>
                        <div className="routes">
                            <Switch>
                                <Route exact path="/">

                                    <Homepage />

                                </Route>

                                <Route exact path="/cryptocurrencies">

                                    <Cryptocurrencies />

                                </Route>
                                <Route exact path="/crypto/:coinId">

                                    <CryptoDetails />

                                </Route>
                                <Route exact path="/news">

                                    <News />

                                </Route>
                            </Switch>
                        </div>
                    </Layout>
                    <div className="footer">
                        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2023

                            <Link to="/">
                                Cryptoverse Inc.
                            </Link> <br />
                            All Rights Reserved.

                        </Typography.Title>
                        <Space>

                            <Link to="/">Home</Link>

                            <Link to="/news">News</Link>

                        </Space>

                    </div>
                </div>
            </div> */}
            <button
                onClick={() => dispatch(removeUser())}
            >Log out from {email}</button>
        </div>
    ) : (
        <Redirect to="/login" />

    )
}


export default Principal;