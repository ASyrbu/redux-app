
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Form } from "./Form";
import { setUser } from "../store/services/slices/userSlice";
import { useState } from "react";

const SignUp = () => {
    const dispatch = useDispatch();
    const { push } = useHistory();
    const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = async (email, password) => {
        const auth = getAuth();
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.accessToken,
            }));
            push('/login');
        } catch (error) {
            setErrorMessage("Email already in use");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
            {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
            <Form title="Sign Up" handleClick={handleRegister} />
        </div>
    );
};

export { SignUp };