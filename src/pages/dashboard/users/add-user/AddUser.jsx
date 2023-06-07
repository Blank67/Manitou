import { Button } from "react-bootstrap";
import "./AddUser.css";
import DashboardFormInput from "../../../../components/dashboard-form-input/DashboardFormInput";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
// import { useDispatch } from "react-redux";
import CustomModal from "../../../../components/modal/CustomModal";
// import { addUser } from "../../../../redux/alluserdata-slice/alluserdata-slice";

const options = [
    { value: "inbound", label: "Inbound" },
    { value: "outbound", label: "Outbound" },
    { value: "dispatch", label: "Dispatch" },
];

const AddUser = () => {
    // const rowData = useSelector((state) => state.allUser.rowData);
    // const index = rowData[rowData.length - 1].id;

    // const dispatch = useDispatch();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [outletContext] = useOutletContext();
    const cancelClickHandler = () => {
        outletContext.setActiveTab(0);
    };
    const [formData, setFormData] = useState({
        userId: "",
        userName: "",
        password: "",
        email: "",
        mobile: "",
        branch: { branchId: "" },
        roles: [],
    });
    // const [formDataValidation, setFormDataValidation] = useState({
    //     userId: false,
    //     userName: false,
    //     password: false,
    //     email: false,
    //     mobile: false,
    //     branch: false,
    //     roles: false,
    // });
    const formDataChangeHandler = (e) => {
        // debugger;
        let { name, value } = e.target;
        if (name === "branch") {
            value = { branchId: value };
            // console.log(value);
        }
        console.log(value);
        setFormData((prevFormData) => {
            // console.log(name);
            // console.log(value);
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    };
    const addUserHandler = () => {
        resetFlags();

        // setSuccess(true);
        // dispatch(addUser({ data: formData }));
    };
    const afterSuccessRedirect = () => {
        setSuccess(false);
        outletContext.setActiveTab(0);
    };
    const resetFlags = () => {
        setSuccess(false);
        setError(false);
    };
    return (
        <>
            <CustomModal
                show={success}
                onHide={afterSuccessRedirect}
                header={false}
                closeButton={false}
                footer={false}
            >
                <p className="text-center text-success my-0">
                    User Added Successfully.
                </p>
            </CustomModal>
            <CustomModal
                show={error}
                onHide={resetFlags}
                header={false}
                closeButton={false}
                footer={false}
            >
                <p className="text-center text-danger my-0">
                    Something went wrong, please try again.
                </p>
            </CustomModal>
            <div className="pt-3 mb-5">
                <h1>Add User</h1>
                <div className="ps-3">
                    {/* <DashboardFormInput
                        className="w-300px"
                        label="Entity"
                        inputType="select"
                        select={{
                            label: "Select Entity",
                            // value: text,
                            // onChange: onTextChangeHandler,
                            options: options,
                        }}
                    /> */}
                    <DashboardFormInput
                        divClassName="my-5"
                        className="w-300px"
                        labelClassName="fw-bolder"
                        isRequired={true}
                        label="Role"
                        inputType="select"
                        select={{
                            label: "Select Role",
                            value: formData.roles,
                            onChange: formDataChangeHandler,
                            options: options,
                            isMulti: true,
                            name: "roles",
                        }}
                    />
                    {/* <DashboardFormInput
                        className="w-300px"
                        label="Product"
                        inputType="select"
                        select={{
                            label: "Select Product",
                            // value: text,
                            // onChange: onTextChangeHandler,
                            options: options,
                        }}
                    /> */}
                    <DashboardFormInput
                        divClassName="my-5"
                        label="User ID"
                        labelClassName="fw-bolder"
                        isRequired={true}
                        className="w-300px"
                        textField={{
                            value: formData.userId,
                            onChange: formDataChangeHandler,
                            name: "userId",
                        }}
                    />
                    <DashboardFormInput
                        divClassName="my-5"
                        label="User Name"
                        labelClassName="fw-bolder"
                        isRequired={true}
                        className="w-300px"
                        textField={{
                            value: formData.userName,
                            onChange: formDataChangeHandler,
                            name: "userName",
                        }}
                    />
                    <DashboardFormInput
                        divClassName="my-5"
                        className="w-300px"
                        label="Branch"
                        labelClassName="fw-bolder"
                        isRequired={true}
                        inputType="select"
                        select={{
                            label: "Select Branch",
                            value: formData.branch.branchId,
                            // value: "dispatch",
                            onChange: formDataChangeHandler,
                            options: options,
                            name: "branch",
                        }}
                    />
                    <DashboardFormInput
                        divClassName="my-5"
                        label="Password"
                        labelClassName="fw-bolder"
                        isRequired={true}
                        className="w-300px"
                        textField={{
                            value: formData.password,
                            onChange: formDataChangeHandler,
                            name: "password",
                        }}
                    />
                    {/* <DashboardFormInput
                        className="w-300px"
                        label="Department"
                        inputType="select"
                        select={{
                            label: "Select Department",
                            // value: text,
                            // onChange: onTextChangeHandler,
                            options: options,
                        }}
                    />
                    <DashboardFormInput
                        label="Location"
                        className="w-300px"
                        textField={
                            {
                                // value: text2,
                                // onChange: onText2ChangeHandler,
                            }
                        }
                    /> */}
                    <DashboardFormInput
                        divClassName="my-5"
                        label="Email"
                        labelClassName="fw-bolder"
                        isRequired={true}
                        className="w-300px"
                        textField={{
                            value: formData.email,
                            onChange: formDataChangeHandler,
                            name: "email",
                        }}
                    />
                    <div className="d-flex justify-content-end gap-2 me-5 pe-5">
                        <Button
                            variant="dark"
                            className="px-4"
                            onClick={addUserHandler}
                        >
                            Save
                        </Button>
                        <Button
                            variant="danger"
                            className="px-4"
                            onClick={cancelClickHandler}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddUser;
