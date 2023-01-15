import { Box, Button, LinearProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';

const OpHubDashboard = ({orders, loading}) => {

    const columns = [
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'description', headerName: 'Description', width: 200 },
        { field: 'numberOfItems', headerName: 'Number of Items', width: 200, valueGetter: (params) => params?.row?.items?.length },
        { field: 'status', headerName: 'Status', width: 200, valueGetter: (params) => params?.row?.status?.name },
        { field: 'owner', headerName: 'Owner', width: 200, valueGetter: (params) => params?.row?.owner?.name },
        { field: 'accepted', headerName: 'Accepted', width: 200, renderCell: (params) => params?.row?.operational_hub ? <p>{params?.row?.operational_hub?.name}</p> : <p>Unassigned</p>  },
        { field: 'viewOrder', headerName: 'ViewOrder', width: 200, renderCell: (params) => <Button onClick={() => console.log('hello!')}>View Order</Button> }
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