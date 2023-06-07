import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";

const CustomTable = (props) => {
    const tableWidth =
        props.columns.length * (props.columnWidth ? props.columnWidth : 0);
    return (
        <div
            className={props.divClass}
            style={{
                width: `${tableWidth === 0 ? "100%" : tableWidth + "px"}`,
            }}
        >
            <DataGrid
                rows={props.rows}
                columns={props.columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: props.pageSize },
                    },
                }}
                pageSizeOptions={props.pageSizeOptions}
                checkboxSelection={props.checkbox}
                onRowSelectionModelChange={props.onRowSelectionModelChange}
                disableColumnMenu
                disableColumnSelector
                disableRowSelectionOnClick
                disableColumnFilter
            />
        </div>
    );
};

CustomTable.propTypes = {
    divClass: PropTypes.string.isRequired,
    rows: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    checkbox: PropTypes.bool.isRequired,
    pageSizeOptions: PropTypes.array.isRequired,
    pageSize: PropTypes.number.isRequired,
    columnWidth: PropTypes.number,
    onRowSelectionModelChange: PropTypes.func,
};
export default CustomTable;
