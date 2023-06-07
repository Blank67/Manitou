import { useState } from "react";
import CustomTable from "../../../../components/table/CustomTable";
import InvoiceDetails from "./InvoiceDetails/InvoiceDetails";

const invoiceItemRows = [
    {
        id: 1,
        quantity: "12329996789",
        description: "Tarun is a Frontend Developer",
        item: 2323,
    },
    {
        id: 2,
        quantity: "12329996789",
        description: "Tarun",
        item: 12312,
    },
    {
        id: 3,
        quantity: "12329996789",
        description: "Tarun",
        item: 4252,
    },
    {
        id: 4,
        quantity: "12329996789",
        description: "Tarun",
        item: 454325,
    },
    {
        id: 5,
        quantity: "12329996789",
        description: "Tarun",
        item: 123,
    },
];
const parcelRows = [
    {
        id: 1,
        field1: "5475658769",
        field2: "Yes",
        field3: "No",
        field4: "yes",
        field5: "LOREM IPSUM",
    },
    {
        id: 2,
        field1: "6787978695",
        field2: "No",
        field3: "Yes",
        field4: "No",
        field5: "Lorem Ipsum",
    },
    {
        id: 3,
        field1: "7962345876",
        field2: "No",
        field3: "No",
        field4: "YesS",
        field5: "Lorem Ipsum",
    },
];

const Dispatch = () => {
    const invoiceItemColumn = [
        { field: "id", headerName: "S.NO", minWidth: 130 },
        { field: "quantity", headerName: "QUANTITY", minWidth: 150 },
        { field: "description", headerName: "DESCRIPTION", minWidth: 300 },
        { field: "item", headerName: "ITEM NUMBER", minWidth: 150 },
    ];
    const parcelColumn = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "field1", headerName: "Parcel Number", width: 150 },
        { field: "field2", headerName: "Matched", width: 150 },
        { field: "field3", headerName: "Delete", width: 150 },
        { field: "field4", headerName: "Pass", width: 150 },
        { field: "field5", headerName: "Remarks", width: 150 },
    ];

    const [invoiceDetails, setInvoiceDetails] = useState({
        invoiceNumber: "",
        lrNumber: "",
        supplierName: "",
        buyersName: "",
        transporterName: "",
        transporterMode: "",
    });
    const invoiceDetailsChangeHandler = (e) => {
        let { name, value } = e.target;
        setInvoiceDetails((prevState) => ({ ...prevState, [name]: value }));
    };
    return (
        <div className="pt-3">
            <div>
                <h3>Invoice Details</h3>
                <InvoiceDetails
                    invoiceDetails={invoiceDetails}
                    invoiceDetailsChangeHandler={invoiceDetailsChangeHandler}
                />
            </div>
            <div className="mt-4">
                <h3>Invoice Items Details</h3>
                <CustomTable
                    divClass={"h-470px mt-4"}
                    checkbox={false}
                    rows={invoiceItemRows}
                    columns={invoiceItemColumn}
                    pageSizeOptions={[10, 25, 100]}
                    pageSize={10}
                    // columnWidth={220}
                />
            </div>
            <div className="my-4">
                <h3>Parcel Details</h3>
                <CustomTable
                    divClass={"h-470px mt-4"}
                    checkbox={false}
                    rows={parcelRows}
                    columns={parcelColumn}
                    pageSizeOptions={[10, 25, 100]}
                    pageSize={10}
                    // columnWidth={220}
                />
            </div>
        </div>
    );
};

export default Dispatch;
