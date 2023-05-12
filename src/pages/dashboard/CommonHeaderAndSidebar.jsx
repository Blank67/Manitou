import { useState } from "react";
import { Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import CustomHeader from "../../components/header/CustomHeader";
import CustomSidebar from "../../components/sidebar/CustomSidebar";
import "../../common/Common.css";

import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ListIcon from "@mui/icons-material/List";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";

const menuItems = [
    {
        subMenuLabel: "Users",
        icon: <ListIcon />,
        subMenu: [
            { id: 0, menuLabel: "All Users", icon: <PeopleAltOutlinedIcon /> },
            { id: 1, menuLabel: "Add User", icon: <PersonAddAltIcon /> },
        ],
    },
    {
        id: 999,
        menuLabel: "My Profile",
        icon: <SupervisedUserCircleOutlinedIcon />,
    },
];

const CommonHeaderAndSidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [editSelectedUser, setEditSelectedUser] = useState({});

    return (
        <div className="min-100vh">
            <Row className="w-100 m-0 position-fixed zIndex-9000">
                <CustomHeader setActiveTab={setActiveTab} />
            </Row>

            <div className="d-flex pt-auto pt-7">
                <div className="d-flex position-fixed h-100 zIndex-9000 mt-n30px">
                    <CustomSidebar
                        collapsed={collapsed}
                        setCollapsed={setCollapsed}
                        setActiveTab={setActiveTab}
                        menuItems={menuItems}
                    />
                </div>

                <div
                    className="w-100 transition-3s"
                    style={{ marginLeft: collapsed ? "80px " : "250px" }}
                >
                    <Outlet
                        context={[
                            {
                                activeTab: activeTab,
                                setActiveTab: setActiveTab,
                                editSelectedUser: editSelectedUser,
                                setEditSelectedUser: setEditSelectedUser,
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default CommonHeaderAndSidebar;
