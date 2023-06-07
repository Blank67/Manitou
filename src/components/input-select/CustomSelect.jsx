import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import PropTypes from "prop-types";
import "./CustomSelect.css";

const CustomSelect = (props) => {
    const selectItems = props.options.map((option, index) => (
        <MenuItem key={index} value={option.value}>
            {option.label}
        </MenuItem>
    ));
    return (
        <FormControl className={`min-width-180px ${props.className}`}>
            <InputLabel id="demo-simple-select-label">
                {props.input?.label ?? ""}
            </InputLabel>
            <Select
                label={props.input?.label}
                value={props.select.value}
                onChange={props.select.onChange}
                multiple={props.select.isMulti}
                name={props.select.name}
            >
                <MenuItem value="">None</MenuItem>
                {selectItems}
            </Select>
        </FormControl>
    );
};

CustomSelect.propTypes = {
    className: PropTypes.string,
    input: PropTypes.object,
    // select: PropTypes.shape({
    //     value: PropTypes.string,
    //     onChange: PropTypes.func,
    // }),
    select: PropTypes.object,
    options: PropTypes.array.isRequired,
};

export default CustomSelect;
