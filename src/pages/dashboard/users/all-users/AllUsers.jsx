import { Switch, TextField } from "@mui/material";
import { Button } from "react-bootstrap";
import CustomSelect from "../../../../components/input-select/CustomSelect";
import { useState } from "react";
import CustomTable from "../../../../components/table/CustomTable";
import "./AllUsers.css";
import { useOutletContext } from "react-router-dom";
import { REGEX } from "../../../../utils/RegEx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllUserDataTable } from "../../../../redux/alluserdata-slice/alluserdata-slice";

const options = [
    { value: "inbound", label: "Inbound" },
    { value: "outbound", label: "Outbound" },
    { value: "dispatch", label: "Dispatch" },
];

const rowsDataTest = [
    {
        i: 0,
        id: 1,
        name: "Demo Name 1",
        branch: "India 1",
        lockStatus: "No",
        dept: "Inbound",
        role: "CEO 1",
        action: true,
    },
    {
        i: 1,
        id: 2,
        name: "Demo Name 2",
        branch: "India 2",
        lockStatus: "No",
        dept: "Inbound",
        role: "CEO 2",
        action: false,
    },
    {
        i: 2,
        id: 3,
        name: "Demo Name 3",
        branch: "India 3",
        lockStatus: "No",
        dept: "Outbound",
        role: "CEO 3",
        action: true,
    },
    {
        i: 3,
        id: 4,
        name: "Demo Name 4",
        branch: "India 4",
        lockStatus: "No",
        dept: "Dispatch",
        role: "CEO 4",
        action: true,
    },
    {
        i: 4,
        id: 5,
        name: "Demo Name 5",
        branch: "India 5",
        lockStatus: "No",
        dept: "Dispatch",
        role: "CEO 5",
        action: false,
    },
    {
        i: 5,
        id: 6,
        name: "Demo Name 6",
        branch: "India 6",
        lockStatus: "No",
        dept: "Inbound",
        role: "CEO 6",
        action: false,
    },
    {
        i: 6,
        id: 7,
        name: "Demo Name 7",
        branch: "India 7",
        lockStatus: "No",
        dept: "Dispatch",
        role: "CEO 7",
        action: true,
    },
    {
        i: 7,
        id: 8,
        name: "Demo Name 8",
        branch: "India 8",
        lockStatus: "No",
        dept: "Outbound",
        role: "CEO 8",
        action: true,
    },
    {
        i: 8,
        id: 9,
        name: "Demo Name 9",
        branch: "India 9",
        lockStatus: "No",
        dept: "Dispatch",
        role: "CEO 9",
        action: false,
    },
    {
        i: 9,
        id: 10,
        name: "Demo Name 10",
        branch: "India 10",
        lockStatus: "No",
        dept: "Outbound",
        role: "CEO 10",
        action: true,
    },
];

const AllUsers = () => {
    const dispatch = useDispatch();
    const rowData = useSelector((state) => state.allUser.rowData);
    const [rows, setRows] = useState(rowData || []);
    const [selectedRows, setSelectedRows] = useState([]);
    const columns = [
        {
            field: "i",
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
                        if (isAdded(params.id)) {
                            console.log("Will Add");
                        } else {
                            console.log("Will Not Add");
                        }

                        // outletContext.setActiveTab(998);
                        // outletContext.setEditSelectedUser(params.row);
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
    const handleSelectionModelChange = (e) => {
        setSelectedRows(e);
    };
    const isAdded = (id) => {
        return selectedRows.some((row) => row === id);
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
                checkbox={true}
                rows={rows}
                columns={columns}
                pageSizeOptions={[10, 25, 100]}
                pageSize={10}
                columnWidth={150}
                onRowSelectionModelChange={handleSelectionModelChange}
            />
        </div>
    );
};

export default AllUsers;
