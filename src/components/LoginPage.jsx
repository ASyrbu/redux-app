import { Link } from 'react-router-dom'
import { Login } from './Login'
import { Typography } from 'antd';

const { Title } = Typography;

const LoginPage = () => {
    return (
        <div className='bg-gray-200'>
            <Title level={2} className="heading">Login</Title>
            <Login />
            <p>
                or <Link to="/register">Зарегайся</Link>
            </p>
        </div>
    )
}

export default LoginPage