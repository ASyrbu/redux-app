import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Menu, Typography, Avatar, Badge } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';
import { ShoppingCartOutlined } from '@ant-design/icons';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 800) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    const menuItems = [
        { key: 'home', icon: <HomeOutlined />, text: 'Home', link: '/' },
        { key: 'cryptocurrencies', icon: <FundOutlined />, text: 'Cryptocurrencies', link: '/cryptocurrencies' },
        { key: 'news', icon: <BulbOutlined />, text: 'News', link: '/news' },
    ];
    const cart = useSelector(state => state.cart.cart);

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="logo"><Link to="/">Cryptoverse</Link></Typography.Title>
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
            </div>
            {activeMenu && (
                <Menu theme="dark" mode="vertical" defaultSelectedKeys={['home']}>
                    {menuItems.map(item => (
                        <Menu.Item key={item.key} icon={item.icon}>
                            <Link to={item.link}>{item.text}</Link>
                        </Menu.Item>))}
                    <Menu.Item key='cart' icon={<ShoppingCartOutlined />}>
                        <Link to="/cart">Cart</Link>
                        <Badge count={cart.length} offset={[10, -20]}></Badge>
                    </Menu.Item >

                </Menu>
            )
            }
        </div >
    );
};

export default Navbar;