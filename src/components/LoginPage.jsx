import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from './Login'

const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <Login />
            <p>
                or <Link to="/register">Зарегайся</Link>
            </p>
        </div>
    )
}

export default LoginPage