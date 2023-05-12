import PropTypes from "prop-types";
import {
    Sidebar,
    Menu,
    MenuItem,
    // useProSidebar,
    SubMenu,
} from "react-pro-sidebar";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "../../common/Common.css";

const CustomSidebar = (props) => {
    // const { collapseSidebar, collapsed } = useProSidebar();

    const onClickHandler = (tab) => {
        props.setActiveTab(tab);
    };

    const menuItems = props.menuItems.map((menu, menuIndex) => {
        if (menu.subMenu) {
            return (
                <SubMenu
                    key={menuIndex}
                    label={menu.subMenuLabel}
                    icon={menu.icon}
                >
                    {menu.subMenu.map((subMenu, subMenuIndex) => (
                        <MenuItem
                            key={menuIndex + subMenuIndex}
                            icon={subMenu.icon}
                            onClick={() => {
                                onClickHandler(subMenu.id);
                            }}
                        >
                            {subMenu.menuLabel}
                        </MenuItem>
                    ))}
                </SubMenu>
            );
        } else {
            return (
                <MenuItem
                    key={menuIndex}
                    icon={menu.icon}
                    onClick={() => {
                        onClickHandler(menu.id);
                    }}
                >
                    {menu.menuLabel}
                </MenuItem>
            );
        }
    });

    return (
        <Sidebar className="border border-danger bg-red h-100">
            <Menu defaultOpen={true} className="bg-red h-100">
                {/* <MenuItem
                    icon={<MenuOutlinedIcon />}
                    onClick={() => {
                        collapseSidebar();
                        props.setCollapsed(!collapsed);
                    }}
                ></MenuItem> */}
                {menuItems}
            </Menu>
        </Sidebar>
    );
};

CustomSidebar.propTypes = {
    setActiveTab: PropTypes.func.isRequired,
    setCollapsed: PropTypes.func.isRequired,
    menuItems: PropTypes.array.isRequired,
};

export default CustomSidebar;
