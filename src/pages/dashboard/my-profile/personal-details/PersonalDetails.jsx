import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const PersonalDetails = (props) => {
    const userData = useSelector((state) => state.user.userData);

    return (
        <div className="mt-5">
            <h6>PersonalDetails</h6>
            <p>{userData.username}</p>
            <p>{userData.password}</p>
            <p>{userData.name}</p>
            <p>{userData.email}</p>
        </div>
    );
};

PersonalDetails.propTypes = {};

export default PersonalDetails;
