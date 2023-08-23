import { useState } from "react";

const Form = ({ title, handleClick }) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        < div className="flex flex-col items-center justify-center">
            <input
                className="border border-gray-300 rounded-md py-2 px-4 mb-4"

                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input
                className="border border-gray-300 rounded-md py-2 px-4 mb-4"
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="password"
            />

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleClick(email, pass)}
            >
                {title}
            </button>
        </div>
    )
}

export { Form }