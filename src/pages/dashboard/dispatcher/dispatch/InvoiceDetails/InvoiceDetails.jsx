import DashboardFormInput from "../../../../../components/dashboard-form-input/DashboardFormInput";
import PropTypes from "prop-types";

const InvoiceDetails = (props) => {
    return (
        <>
            <div className="d-flex justify-content-between pe-4 my-3">
                <DashboardFormInput
                    label="Invoice Number"
                    labelClassName=""
                    isRequired={false}
                    className="w-300px"
                    textField={{
                        value: props.invoiceDetails.invoiceNumber,
                        onChange: props.invoiceDetailsChangeHandler,
                        name: "invoiceNumber",
                    }}
                />
                <DashboardFormInput
                    label="LR Number"
                    labelClassName=""
                    isRequired={false}
                    className="w-300px"
                    textField={{
                        value: props.invoiceDetails.lrNumber,
                        onChange: props.invoiceDetailsChangeHandler,
                        name: "lrNumber",
                    }}
                />
            </div>
            <div className="d-flex justify-content-between pe-4 my-3">
                <DashboardFormInput
                    label="Supplier Name"
                    labelClassName=""
                    isRequired={false}
                    className="w-300px"
                    textField={{
                        value: props.invoiceDetails.supplierName,
                        onChange: props.invoiceDetailsChangeHandler,
                        name: "supplierName",
                    }}
                />
                <DashboardFormInput
                    label="Buyers Name"
                    labelClassName=""
                    isRequired={false}
                    className="w-300px"
                    textField={{
                        value: props.invoiceDetails.buyersName,
                        onChange: props.invoiceDetailsChangeHandler,
                        name: "buyersName",
                    }}
                />
            </div>
            <div className="d-flex justify-content-between pe-4 my-3">
                <DashboardFormInput
                    label="Transporter Name"
                    labelClassName=""
                    isRequired={false}
                    className="w-300px"
                    textField={{
                        value: props.invoiceDetails.transporterName,
                        onChange: props.invoiceDetailsChangeHandler,
                        name: "transporterName",
                    }}
                />
                <DashboardFormInput
                    label="Transporter Mode"
                    labelClassName=""
                    isRequired={false}
                    className="w-300px"
                    textField={{
                        value: props.invoiceDetails.transporterMode,
                        onChange: props.invoiceDetailsChangeHandler,
                        name: "transporterMode",
                    }}
                />
            </div>
        </>
    );
};
InvoiceDetails.propTypes = {
    invoiceDetails: PropTypes.object,
    invoiceDetailsChangeHandler: PropTypes.func,
};
export default InvoiceDetails;
