
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/services/slices/userSlice";
import { Form } from "./Form";
import { useState } from "react";

const Login = () => {
    const dispatch = useDispatch();
    const { push } = useHistory();
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async (email, password) => {
        const auth = getAuth();
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
            }));
            push('/');
        } catch (error) {
            setErrorMessage("Wrong Email or Password");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
            {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
            <Form title="Sign In" handleClick={handleLogin} />
        </div>
    );
};

export { Login };   