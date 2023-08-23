import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
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
            <div className="app">
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
                            <Link className='text-white' to="/">Home</Link>
                            <Link className='text-white' to="/news">News</Link>
                            <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-100 "
                                onClick={() => dispatch(removeUser())}
                            >Log out from {email}</button>
                        </Space>

                    </div>
                </div>
            </div>
        </div>
    ) : (
        <Redirect to="/login" />

    )
}


export default Principal;