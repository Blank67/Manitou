import { Dropdown, Image } from "react-bootstrap";
import "../../common/Common.css";
import "./CustomHeader.css";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../redux/auth-slice/auth-slice";
import PropTypes from "prop-types";

const CustomHeader = (props) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.userData);
    const logoutHandler = () => {
        dispatch(setLogout());
    };
    const myProfileHandler = () => {
        props.setActiveTab(999);
    };
    return (
        <div className="position-fixed w-100 header-shadow header-bg">
            <div className="d-flex w-100 align-items-center justify-content-between">
                <div className="justify-content-center d-flex p-2">
                    <Image
                        src="http://www.manitouamericasonline.com/Libraries/Color_Logos/Manitou_Logo_Color.sflb.ashx"
                        className="logo pointer-hand"
                        onClick={() => {
                            props.setActiveTab(0);
                        }}
                        // href=" "
                        // target="_blank"
                        // rel="noreferrer"
                    ></Image>
                </div>

                <div className="d-flex justify-content-center align-items-center gap-1 my-1">
                    <div>
                        <div className="d-flex justify-content-end">
                            <b>Welcome</b>
                            <span className="capital">: {user.name}</span>
                        </div>
                        <div className="d-flex justify-content-end">
                            <b>Email</b>: {user.email}
                        </div>
                    </div>
                    <div>
                        <div className="d-flex justify-content-end">
                            <Dropdown className="">
                                <Dropdown.Toggle className="bg-transparent text-black border-0 shadow" />
                                <Dropdown.Menu className="mt-2">
                                    <Dropdown.Item
                                        href=""
                                        onClick={myProfileHandler}
                                    >
                                        My Profile
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href=""
                                        onClick={logoutHandler}
                                    >
                                        Logout
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

CustomHeader.propTypes = {
    setActiveTab: PropTypes.func,
};

export default CustomHeader;
