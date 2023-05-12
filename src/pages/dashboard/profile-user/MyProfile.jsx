import { useSelector } from "react-redux";

const MyProfile = () => {
    const userData = useSelector((state) => state.user.userData);
    return (
        <div>
            <h1>My Profile</h1>
            <p>{userData.username}</p>
            <p>{userData.password}</p>
            <p>{userData.name}</p>
            <p>{userData.email}</p>
        </div>
    );
};

export default MyProfile;
