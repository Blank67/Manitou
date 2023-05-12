import { Button, Container, Form } from "react-bootstrap";
import homeImage from "../../assets/images/manitouLogo.jpg";
import "../../common/Common.css";
import "./Login.css";
import CustomFormGroup from "../../components/form-group/CustomFormGroup";
import { useState } from "react";
import ErrorModal from "../../components/error-modal/ErrorModal";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/auth-slice/auth-slice";
import { setUserData } from "../../redux/userdata-slice/usedata-slice";

const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ show: false, message: "" });
    const removeAlert = () => {
        setError({ show: false, message: "" });
    };
    const onUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const loginHandler = (e) => {
        e.preventDefault();
        removeAlert();
        if (username.length === 0) {
            setError({
                show: true,
                message: "Username is empty. Please enter your username.",
            });
            return;
        }
        if (password.length === 0) {
            setError({
                show: true,
                message: "Password is empty. Please enter your password.",
            });
            return;
        }
        const loginData = {
            username,
            password,
            name: username,
            email: username + "@gmail.com",
        };
        try {
            dispatch(setLogin({ status: true }));
            dispatch(setUserData({ user: loginData }));
        } catch (err) {
            setError({
                show: true,
                message: "Something went wrong. Please try again.",
            });
        }
    };
    return (
        <>
            {error.show && (
                <ErrorModal message={error.message} onClose={removeAlert} />
            )}
            <Container className="w-33 center">
                <div className="p-3 bg-white rounded-top">
                    <img src={homeImage} className="w-100" alt="Home" />
                </div>
                <div className="bg-danger rounded-bottom p-4">
                    <Form>
                        <CustomFormGroup
                            groupClass="mb-1"
                            label="Username"
                            control={{
                                type: "text",
                                placeholder: "Username",
                                value: username,
                                onChange: onUsernameChange,
                            }}
                        />
                        <CustomFormGroup
                            groupClass="mb-3"
                            label="Password"
                            control={{
                                type: "password",
                                placeholder: "Password",
                                value: password,
                                onChange: onPasswordChange,
                            }}
                        />
                        <Button
                            type="submit"
                            className="w-100 py-2"
                            variant="secondary"
                            onClick={loginHandler}
                        >
                            SIGN IN
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    );
};

export default Login;
