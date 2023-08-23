
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
import { setUser } from "../store/services/slices/userSlice";
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
        <>
            {errorMessage && <div>{errorMessage}</div>}
            <Form title="sign in" handleClick={handleLogin} />
        </>
    );
};

export { Login };   