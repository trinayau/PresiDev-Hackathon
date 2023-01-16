import { Box, Button, LinearProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const OpHubDashboard = ({orders, loading}) => {

    const columns = [
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'description', headerName: 'Description', width: 200 },
        { field: 'numberOfItems', headerName: 'Number of Items', width: 200, valueGetter: (params) => params?.row?.items?.length },
        { field: 'status', headerName: 'Status', width: 200, valueGetter: (params) => params?.row?.status?.name },
        { field: 'owner', headerName: 'Owner', width: 200, valueGetter: (params) => params?.row?.owner?.name },
        { field: 'accepted', headerName: 'Accepted', width: 200, renderCell: (params) => params?.row?.operational_hub ? params?.row?.operational_hub?.name : `Unassigned`  },
        { field: 'viewOrder', headerName: '', width: 200, renderCell: (params) => <Button component={Link} to={`${params.row.id}`}>View Order</Button> },
    ]

    return (
        <div style={{ height: 400, width: '75vw' }}>
            <DataGrid
                disableSelectionOnClick
                rows={orders}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                loading={loading}
                components={{
                    LoadingOverlay: LinearProgress,
                }}
            />
        </div>
    )
}

export default OpHubDashboard