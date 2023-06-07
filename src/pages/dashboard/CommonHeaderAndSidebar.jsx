import { useState } from "react";
import { Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import CustomHeader from "../../components/header/CustomHeader";
import CustomSidebar from "../../components/sidebar/CustomSidebar";
import "../../common/Common.css";
import "./CommonHeaderAndSidebar.css";

import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ListIcon from "@mui/icons-material/List";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";

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
        subMenuLabel: "Dispatcher",
        icon: <ListIcon />,
        subMenu: [
            { id: 2, menuLabel: "Dispatch", icon: <PeopleAltRoundedIcon /> },
            {
                id: 3,
                menuLabel: "Parts Dispatch",
                icon: <PeopleAltRoundedIcon />,
            },
        ],
    },
    {
        subMenuLabel: "Inbound",
        icon: <ListIcon />,
        subMenu: [
            { id: 4, menuLabel: "Inbound", icon: <PeopleAltRoundedIcon /> },
            {
                id: 5,
                menuLabel: "Inbound Approval",
                icon: <PeopleAltRoundedIcon />,
            },
            {
                id: 6,
                menuLabel: "Inbound Approved",
                icon: <PeopleAltRoundedIcon />,
            },
        ],
    },
    {
        subMenuLabel: "Machine Outbound",
        icon: <ListIcon />,
        subMenu: [
            {
                id: 7,
                menuLabel: "Domestic Machine",
                icon: <PeopleAltRoundedIcon />,
            },
            {
                id: 8,
                menuLabel: "Export Machine",
                icon: <PeopleAltRoundedIcon />,
            },
            {
                id: 9,
                menuLabel: "Manual Machine Bill",
                icon: <PeopleAltRoundedIcon />,
            },
        ],
    },
    {
        subMenuLabel: "Parts Outbound",
        icon: <ListIcon />,
        subMenu: [
            {
                id: 10,
                menuLabel: "Domestic Parts",
                icon: <PeopleAltRoundedIcon />,
            },
            {
                id: 11,
                menuLabel: "Export Parts",
                icon: <PeopleAltRoundedIcon />,
            },
            {
                id: 12,
                menuLabel: "Transporter Charges",
                icon: <PeopleAltRoundedIcon />,
            },
            {
                id: 13,
                menuLabel: "Delivery Partner",
                icon: <PeopleAltRoundedIcon />,
            },
        ],
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

            <div className="d-flex pt-auto position-relative main-div-top-80px">
                <div className="d-flex zIndex-9000 custom-sidebar-container">
                    {/* <div className="d-flex custom-sidebar-container"> */}
                    <CustomSidebar
                        collapsed={collapsed}
                        setCollapsed={setCollapsed}
                        setActiveTab={setActiveTab}
                        menuItems={menuItems}
                    />
                </div>

                <div
                    className="w-100 transition-3s outlet-container"
                    style={{ marginLeft: collapsed ? "80px " : "250px" }}
                >
                    {/* <div className="w-100 transition-3s outlet-container test"> */}
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
