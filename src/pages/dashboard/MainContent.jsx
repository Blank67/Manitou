import { useOutletContext } from "react-router-dom";
import User from "./user/User";
import AddUser from "./add-user/AddUser";
import EditUser from "./edit-user/EditUser";
import MyProfile from "./profile-user/MyProfile";

const MainContent = () => {
    const [outletContext] = useOutletContext();
    return (
        <div className="ms-5 me-4">
            {outletContext.activeTab === 0 && <User />}
            {outletContext.activeTab === 1 && <AddUser />}
            {outletContext.activeTab === 998 && <EditUser />}
            {outletContext.activeTab === 999 && <MyProfile />}
        </div>
    );
};

export default MainContent;
