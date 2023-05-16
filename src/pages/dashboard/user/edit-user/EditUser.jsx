import { useState } from "react";
import DashboardFormInput from "../../../../components/dashboard-form-input/DashboardFormInput";
import { Button } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editUser } from "../../../../redux/alluserdata-slice/alluserdata-slice";
import CustomModal from "../../../../components/modal/CustomModal";

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

const EditUser = () => {
    const [outletContext] = useOutletContext();
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const [success, setSuccess] = useState(false);
    const onTextChangeHandler = (e) => {
        setText(e.target.value);
    };
    const [text2, setText2] = useState(
        outletContext.editSelectedUser?.name ?? ""
    );
    const onText2ChangeHandler = (e) => {
        setText2(e.target.value);
    };
    const saveClickHandler = () => {
        const userNewData = {
            ...outletContext.editSelectedUser,
            name: text2,
        };
        dispatch(editUser({ data: userNewData }));
        setSuccess(true);
    };
    const afterSuccessRedirect = () => {
        setSuccess(false);
        outletContext.setActiveTab(0);
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
                    Details updated successfully.
                </p>
            </CustomModal>
            <div className="pt-3 mb-5">
                <h1>Edit User</h1>
                <div className="ps-3">
                    <DashboardFormInput
                        className="w-300px"
                        label="Entity"
                        inputType="select"
                        select={{
                            label: "Select Entity",
                            value: text,
                            onChange: onTextChangeHandler,
                            options: options,
                        }}
                    />
                    <DashboardFormInput
                        className="w-300px"
                        label="Role"
                        inputType="select"
                        select={{
                            label: "Select Role",
                            value: text,
                            onChange: onTextChangeHandler,
                            options: options,
                        }}
                    />
                    <DashboardFormInput
                        className="w-300px"
                        label="Product"
                        inputType="select"
                        select={{
                            label: "Select Product",
                            value: text,
                            onChange: onTextChangeHandler,
                            options: options,
                        }}
                    />
                    <DashboardFormInput
                        label="User ID"
                        className="w-300px"
                        textField={{
                            value: text2,
                            onChange: onText2ChangeHandler,
                        }}
                    />
                    <DashboardFormInput
                        label="User Name"
                        className="w-300px"
                        textField={{
                            value: text2,
                            onChange: onText2ChangeHandler,
                        }}
                    />
                    <DashboardFormInput
                        className="w-300px"
                        label="Branch"
                        inputType="select"
                        select={{
                            label: "Select Branch",
                            value: text,
                            onChange: onTextChangeHandler,
                            options: options,
                        }}
                    />
                    <DashboardFormInput
                        label="Password"
                        className="w-300px"
                        textField={{
                            value: text2,
                            onChange: onText2ChangeHandler,
                        }}
                    />
                    <DashboardFormInput
                        className="w-300px"
                        label="Department"
                        inputType="select"
                        select={{
                            label: "Select Department",
                            value: text,
                            onChange: onTextChangeHandler,
                            options: options,
                        }}
                    />
                    <DashboardFormInput
                        className="w-300px"
                        label="Locked"
                        inputType="check"
                        dataOptions={[
                            {
                                label: "Yes",
                                type: "radio",
                                status: outletContext.editSelectedUser?.action
                                    ? false
                                    : true,
                            },
                            {
                                label: "No",
                                type: "radio",
                                status: outletContext.editSelectedUser?.action
                                    ? true
                                    : false,
                            },
                        ]}
                    />
                    <DashboardFormInput
                        label="Email"
                        className="w-300px"
                        textField={{
                            value: text2,
                            onChange: onText2ChangeHandler,
                        }}
                    />
                    <div className="d-flex justify-content-end gap-2 me-5 pe-5">
                        <Button
                            variant="dark"
                            className="px-4"
                            onClick={saveClickHandler}
                        >
                            Save
                        </Button>
                        <Button
                            variant="danger"
                            className="px-4"
                            onClick={() => {
                                outletContext.setActiveTab(0);
                            }}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditUser;
