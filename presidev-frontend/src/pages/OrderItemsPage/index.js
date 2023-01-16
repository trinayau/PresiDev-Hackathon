import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';

import { API_ENDPOINT } from '../../settings'
import AuthContext from '../../context/AuthContext';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, LinearProgress, MenuItem, Select, Typography, InputLabel } from '@mui/material';
import { useSnackbar } from 'notistack';
  

const OrderItems = () => {

    const {id} = useParams()
    const [order, setOrder] = useState({items: []})
    const [loading, setLoading] = useState(false)
    const [reload, setReload] = useState(false)
    const [statusList, setStatusList] = useState([])
    const { authTokens, user } = useContext(AuthContext);
    const {enqueueSnackbar}  = useSnackbar();

    useEffect(()=> {
        (async () => {
            setLoading(true)
            const responseOrder = await axios.get(`${API_ENDPOINT}/orders/order/${id}`, { headers: { Authorization: `Bearer ${authTokens.access}` } })
            setOrder(responseOrder?.data)
            const responseStatus = await axios.get(`${API_ENDPOINT}/orders/status`, { headers: { Authorization: `Bearer ${authTokens.access}` } })
            
            let statusListFiltered = []
            if (user.profile.organisation.organisation_type.name === 'Operational Hub') {
                statusListFiltered = responseStatus?.data.filter(status => status.id !== 1 && status.id !== 5)
            } else if (user.profile.organisation.organisation_type.name === 'End User') {
                statusListFiltered = responseStatus?.data.filter(status => status.id === 1 || status.id === 5)
            }
            setStatusList(statusListFiltered)
            setLoading(false)
        })()
    }, [reload])

    const columns = [
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'description', headerName: 'Description', width: 200 },
        { field: 'quantity', headerName: 'Quantity', width: 200 },
        { field: 'url', headerName: 'Image Url', width: 200 },
        { field: 'category', headerName: 'Category', width: 200, valueGetter: (params) => params?.row?.categories?.name }
    ]

    const acceptOrder = async () => {
        const response = await axios.patch(`${API_ENDPOINT}/orders/order/${id}/?accept`, {}, { headers: { Authorization: `Bearer ${authTokens.access}` } })
        if (response.status == 200){
            enqueueSnackbar('Order Accepted!', {variant: 'success', anchorOrigin: {
                vertical: 'top',
                horizontal: 'center'
            }})
            setReload(!reload)
        } else {
            enqueueSnackbar('There was a error accepting this order', {variant: 'warning', anchorOrigin: {
                vertical: 'top',
                horizontal: 'center'
            }})
        }
    }

    const handleStatusChange = async status => {
        const response = await axios.patch(`${API_ENDPOINT}/orders/order/${id}/?status=${status.id}`, {}, { headers: { Authorization: `Bearer ${authTokens.access}` } })
        if (response.status == 200){
            enqueueSnackbar('Status Changed!', {variant: 'success', anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center'
                }})
                setReload(!reload)
        } else {
            enqueueSnackbar('There was a error changing this status', {variant: 'warning', anchorOrigin: {
                vertical: 'top',
                horizontal: 'center'
            }})
        }
        console.log(response)
    }

    const parseDate = (date) => {
        const orderDate = new Date(date)
        const year = orderDate.getFullYear()
        const month = orderDate.getMonth()+1
        const day = orderDate.getDate()
        return `${day}/${month}/${year}`
    }

    const createRows = () => 
        order?.items.map(item => {
            return {...item.item, quantity: item.quantity}
        })
    

    return (
        <>
            <Box
                sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 3}}
            >
                <Box>
                    <Typography variant='h4' >Order Details:</Typography>
                    <Typography>Name: {order?.name}</Typography>
                    <Typography>Description: {order?.description}</Typography>
                    <Typography>Date ordered: {parseDate(order?.created_at)}</Typography>
                    <Typography>Owner: {order?.owner?.name}</Typography>
                    <Typography>Status: {order?.status?.name}</Typography>
                </Box>

                <Box>
                    {
                        user.profile.organisation.organisation_type.name === 'Supplier' ? null : 
                        order?.operational_hub === null ? 
                        <Button color='success' variant='outlined' sx={{my: 5}} onClick={() => acceptOrder()} >Accept Order</Button>
                        :
                        <>
                            <Typography>Change Order Status</Typography>
                            <Select 
                                sx={{minWidth: 200, color: 'black'}}
                                label='Set Order Status'
                            >
                                    {statusList.map(status => 
                                        <MenuItem
                                        onClick={() => handleStatusChange(status)}
                                        >{status?.name}</MenuItem>
                                        )}
                                </Select>
                        </>
                    }
                </Box>
            </Box>

                <div style={{ height: 600, width: '75vw' }}>
                <DataGrid
                    disableSelectionOnClick
                    rows={createRows()}
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