import { Switch, TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import CustomSelect from "../../../components/input-select/CustomSelect";
import { useState } from "react";
import CustomTable from "../../../components/table/CustomTable";
import "./User.css";
import { useOutletContext } from "react-router-dom";
import { REGEX } from "../../../utils/RegEx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllUserDataTable } from "../../../redux/alluserdata-slice/alluserdata-slice";

const options = [
    { value: "transport 1", label: "Transport 1" },
    { value: "transport 2", label: "Transport 2" },
    { value: "transport 3", label: "Transport 3" },
    { value: "transport 4", label: "Transport 4" },
    { value: "transport 5", label: "Transport 5" },
    { value: "transport 6", label: "Transport 6" },
    { value: "transport 7", label: "Transport 7" },
    { value: "transport 8", label: "Transport 8" },
    { value: "transport 9", label: "Transport 9" },
    { value: "transport 10", label: "Transport 10" },
];

const rowsDataTest = [
    {
        id: 1,
        name: "Demo Name 1",
        branch: "India 1",
        lockStatus: "No",
        dept: "Transport 1",
        role: "CEO 1",
        action: true,
    },
    {
        id: 2,
        name: "Demo Name 2",
        branch: "India 2",
        lockStatus: "No",
        dept: "Transport 2",
        role: "CEO 2",
        action: false,
    },
    {
        id: 3,
        name: "Demo Name 3",
        branch: "India 3",
        lockStatus: "No",
        dept: "Transport 3",
        role: "CEO 3",
        action: true,
    },
    {
        id: 4,
        name: "Demo Name 4",
        branch: "India 4",
        lockStatus: "No",
        dept: "Transport 4",
        role: "CEO 4",
        action: true,
    },
    {
        id: 5,
        name: "Demo Name 5",
        branch: "India 5",
        lockStatus: "No",
        dept: "Transport 5",
        role: "CEO 5",
        action: false,
    },
    {
        id: 6,
        name: "Demo Name 6",
        branch: "India 6",
        lockStatus: "No",
        dept: "Transport 6",
        role: "CEO 6",
        action: false,
    },
    {
        id: 7,
        name: "Demo Name 7",
        branch: "India 7",
        lockStatus: "No",
        dept: "Transport 7",
        role: "CEO 7",
        action: true,
    },
    {
        id: 8,
        name: "Demo Name 8",
        branch: "India 8",
        lockStatus: "No",
        dept: "Transport 8",
        role: "CEO 8",
        action: true,
    },
    {
        id: 9,
        name: "Demo Name 9",
        branch: "India 9",
        lockStatus: "No",
        dept: "Transport 9",
        role: "CEO 9",
        action: false,
    },
    {
        id: 10,
        name: "Demo Name 10",
        branch: "India 10",
        lockStatus: "No",
        dept: "Transport 10",
        role: "CEO 10",
        action: true,
    },
];

const User = () => {
    const dispatch = useDispatch();
    const rowData = useSelector((state) => state.allUser.rowData);
    const [rows, setRows] = useState(rowData || []);
    const columns = [
        {
            field: "id",
            headerName: "User ID",
        },
        {
            field: "name",
            headerName: "User Name",
            minWidth: 150,
            renderCell: (params) => (
                <div
                    className="text-primary pointer-hand"
                    onClick={() => {
                        outletContext.setActiveTab(998);
                        outletContext.setEditSelectedUser(params.row);
                    }}
                >
                    {params.row.name}
                </div>
            ),
        },
        {
            field: "branch",
            headerName: "Branch",
            minWidth: 110,
            editable: true,
        },
        {
            field: "lockStatus",
            headerName: "Locked Status",
            minWidth: 130,
        },
        {
            field: "dept",
            headerName: "Department",
            minWidth: 150,
        },
        {
            field: "role",
            headerName: "Role",
            minWidth: 100,
        },
        {
            field: "status",
            headerName: "Status",
            minWidth: 100,
            renderCell: (params) => {
                let content = "In-Active";
                if (params.row.action) content = "Active";
                return <span>{content}</span>;
            },
        },
        {
            field: "action",
            headerName: "Action",
            minWidth: 100,
            renderCell: (params) => (
                <Switch
                    checked={params.row.action}
                    onClick={(event) => {
                        const updatedRows = [...rows];
                        const rowIndex = updatedRows.findIndex(
                            (row) => row.id === params.id
                        );
                        updatedRows[rowIndex] = {
                            ...updatedRows[rowIndex],
                            action: event.target.checked,
                        };
                        setRows(updatedRows);
                    }}
                    color="primary"
                />
            ),
        },
    ];
    const [outletContext] = useOutletContext();
    const [userId, setUserId] = useState("");
    const userIdChangeHandler = (e) => {
        setUserId(e.target.value);
    };
    const [username, setUsername] = useState("");
    const usernameChangeHandler = (e) => {
        setUsername(e.target.value);
    };
    const [department, setDepartment] = useState("");
    const departmentChangeHandler = (e) => {
        setDepartment(e.target.value);
    };
    const resetClickHandler = () => {
        setUserId("");
        setUsername("");
        setDepartment("");
    };
    const searchClickHandler = () => {
        let filteredRows = rowData;
        if (userId) {
            filteredRows = filteredRows.filter((row) =>
                row.id.toString().toLowerCase().includes(userId.toLowerCase())
            );
        }
        if (username) {
            filteredRows = filteredRows.filter((row) =>
                row.name.toLowerCase().includes(username.toLowerCase())
            );
        }
        if (department) {
            filteredRows = filteredRows.filter((row) => {
                return (
                    row.dept.replace(REGEX.whitespace, "").toLowerCase() ===
                    department.replace(REGEX.whitespace, "").toLowerCase()
                );
            });
        }
        setRows(filteredRows);
    };

    useEffect(() => {
        if (localStorage.getItem("refresh") === "true") {
            setRows(rowsDataTest);
            dispatch(setAllUserDataTable({ rowData: rowsDataTest }));
        }
    }, [dispatch]);
    return (
        <div className="pt-3">
            <h1>UserDashboard</h1>
            <div className="d-flex justify-content-end">
                <Button
                    variant="dark"
                    onClick={() => {
                        outletContext.setActiveTab(1);
                    }}
                >
                    Add User
                </Button>
            </div>
            <div className="d-flex justify-content-center gap-2">
                <TextField
                    label="User ID Search"
                    variant="outlined"
                    value={userId}
                    onChange={userIdChangeHandler}
                />
                <TextField
                    label="User Name"
                    variant="outlined"
                    value={username}
                    onChange={usernameChangeHandler}
                />
                <CustomSelect
                    options={options}
                    select={{
                        value: department,
                        onChange: departmentChangeHandler,
                    }}
                    input={{ label: "Select Department" }}
                />
                <Button
                    variant="dark"
                    onClick={searchClickHandler}
                    className="px-4 my-1"
                >
                    Search
                </Button>
                <Button
                    variant="danger"
                    onClick={resetClickHandler}
                    className="px-4 my-1"
                >
                    Reset
                </Button>
            </div>
            <CustomTable
                divClass={"h-470px mt-4"}
                checkbox={false}
                rows={rows}
                columns={columns}
                pageSizeOptions={[10, 25, 100]}
                pageSize={10}
                columnWidth={150}
            />
        </div>
    );
};

export default User;
