import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';

import { API_ENDPOINT } from '../../settings'
import AuthContext from '../../context/AuthContext';
import { DataGrid } from '@mui/x-data-grid';
import { Button, LinearProgress } from '@mui/material';
import { useSnackbar } from 'notistack';
  

const OrderItems = () => {

    const {id} = useParams()
    const [order, setOrder] = useState({items: []})
    const [loading, setLoading] = useState(false)
    const { authTokens } = useContext(AuthContext);
    const  {enqueueSnackbar}  = useSnackbar();

    useEffect(()=> {
        (async () => {
            setLoading(true)
            const response = await axios.get(`${API_ENDPOINT}/orders/order/${id}`, { headers: { Authorization: `Bearer ${authTokens.access}` } })
            setOrder(response?.data)
            setLoading(false)
            console.log(response?.data)
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

    const acceptOrder = async () => {
        const response = await axios.patch(`${API_ENDPOINT}/orders/order/${id}/?accept`, {}, { headers: { Authorization: `Bearer ${authTokens.access}` } })
        if (response.status == 200){
            enqueueSnackbar('Order Accepted!', {variant: 'success', anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center'
                }})
        } else {
            enqueueSnackbar('There was a error accepting this order', {variant: 'warning', anchorOrigin: {
                vertical: 'top',
                horizontal: 'center'
            }})
        }
        console.log(response)
    }

    return (
        <>
            {order?.status?.name === "Placed" && order?.operational_hub === null && <Button color='success' variant='outlined' sx={{my: 5}} onClick={() => acceptOrder()} >Accept Order</Button>}
                <div style={{ height: 600, width: '75vw' }}>
                <DataGrid
                    disableSelectionOnClick
                    rows={order?.items}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    loading={loading}
                    components={{
                        LoadingOverlay: LinearProgress,
                    }}
                />
            </div>
        </>
    )

}

export default OrderItems