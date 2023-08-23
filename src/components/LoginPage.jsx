

import { Link } from 'react-router-dom';
import { Login } from './Login';
import { Typography } from 'antd';

const { Title } = Typography;

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Title level={2} className="text-2xl font-bold mb-4">Login</Title>
            <Login />
            <p className="text-gray-600 mt-4">
                or <Link to="/register" className="text-blue-500">Register</Link>
            </p>
        </div>
    );
}

export default LoginPage;