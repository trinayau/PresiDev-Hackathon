import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';

import { API_ENDPOINT } from '../../settings'
import AuthContext from '../../context/AuthContext';
import { DataGrid } from '@mui/x-data-grid';
import { LinearProgress } from '@mui/material';

const OrderItems = () => {

    const {id} = useParams()
    const [order, setOrder] = useState([])
    const [loading, setLoading] = useState(false)
    let { authTokens } = useContext(AuthContext);

    useEffect(()=> {
        (async () => {
            setLoading(true)
            const response = await axios.get(`${API_ENDPOINT}/orders/order/${id}`, { headers: { Authorization: `Bearer ${authTokens.access}` } })
            setOrder(response?.data?.items)
            setLoading(false)
        })()
    }, [])

    const columns = [
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'description', headerName: 'Description', width: 200 },
        { field: 'url', headerName: 'Image Url', width: 200 },
        { field: 'category', headerName: 'Category', width: 200, valueGetter: (params) => params?.row?.categories?.name }

        // { field: 'owner', headerName: 'Owner', width: 200, valueGetter: (params) => params?.row?.owner?.name },
        // { field: 'accepted', headerName: 'Accepted', width: 200, renderCell: (params) => params?.row?.operational_hub ? <p>{params?.row?.operational_hub?.name}</p> : <p>Unassigned</p>  },
        // { field: 'viewOrder', headerName: 'ViewOrder', width: 200, renderCell: (params) => <Button component={Link} to={`${params.row.id}`}>View Order</Button> }
    ]

    return (
        <div style={{ height: 400, width: '75vw' }}>
            <DataGrid
                disableSelectionOnClick
                rows={order}
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

export default OrderItems