import { Link } from 'react-router-dom';
import { SignUp } from './registration';
import { Typography } from 'antd';

const { Title } = Typography;

const RegisterPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Title level={2} className="text-2xl font-bold mb-4">Sign Up</Title>
            <SignUp />
            <p className="text-gray-600 mt-4">
                Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
            </p>
        </div>
    );
}

export default RegisterPage;