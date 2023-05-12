import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import CustomSelect from "../input-select/CustomSelect";
import "./DashboardFormInput.css";
import { Form } from "react-bootstrap";

const DashboardFormInput = (props) => {
    let input = (
        <TextField
            type={props.textField?.type || "text"}
            className={`mx-auto  ${props.className}`}
            label={props.label}
            variant="outlined"
            value={props.textField?.value}
            onChange={props.textField?.onChange}
        />
    );
    if (props.inputType === "select") {
        input = (
            <CustomSelect
                className={`mx-auto ${props.className}`}
                options={props.select.options}
                select={{
                    value: props.select.value,
                    onChange: props.select.onChange,
                }}
                input={{ label: props.select.label }}
            />
        );
    }
    if (props.inputType === "check") {
        input = (
            <div className={`d-flex mx-auto ${props.className}`}>
                {props.dataOptions.map((itm, i) => (
                    <Form.Check
                        key={i}
                        inline
                        name={props.label}
                        label={itm.label}
                        type={itm.type}
                        defaultChecked={itm.status}
                    />
                ))}
            </div>
        );
    }

    return (
        <div className="d-flex justify-content-between align-items-center my-5">
            <b className=" w-200px ps-5">
                {props.label}
                <span className="text-danger">*</span>
            </b>
            {input}
        </div>
    );
};
DashboardFormInput.propTypes = {
    textField: PropTypes.object,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    inputType: PropTypes.string,
    inputLabel: PropTypes.string,
    select: PropTypes.object,
    dataOptions: PropTypes.array,
};
export default DashboardFormInput;
