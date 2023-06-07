import { Tab, Tabs } from "react-bootstrap";
import PersonalDetails from "./personal-details/PersonalDetails";
import ChangePassword from "./change-password/ChangePassword";
import "./MyProfile.css";

const MyProfile = () => {
    return (
        <div className="pt-3">
            <h1>My Profile</h1>
            <Tabs
                defaultActiveKey="details"
                id="fill-tab-example"
                className="mt-4 rounded-pill border border-dark py-2"
                fill
                variant="tabs"
            >
                <Tab
                    eventKey="details"
                    title="Personal Details"
                    tabClassName="rounded-pill border border-dark"
                >
                    <PersonalDetails />
                </Tab>
                <Tab
                    eventKey="password"
                    title="Change Password"
                    tabClassName="rounded-pill border border-dark"
                >
                    <ChangePassword />
                </Tab>
            </Tabs>
        </div>
    );
};

export default MyProfile;
