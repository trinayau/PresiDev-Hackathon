import {Routes, Route} from 'react-router-dom';
import {default as Layout} from '../layouts';
import { HomePage, LoginPage, AccountPage, CategoriesPage, SingleProductPage, MenuPage, CartPage, PreviousProductPage} from '../pages';
import { OrderDetail, Sidebar, Favourites } from '../components';
import PrivateRoutes from './protectedRoutes';
import { Box } from '@mui/material';

const Routing = () =>
    <Routes>
        <Route path="/" element={<Layout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route element={<PrivateRoutes />} >
                <Route path="/*" element={
                    <Box
                        sx={{display: 'flex', width: '100%!important'}}
                    >
                        <Sidebar />
                        <Box
                            sx={{margin: 6}}
                        >
                            <Routes>
                                <Route path="/account" element={<AccountPage />} />
                                <Route path="/orders" element={<OrderDetail />} />
                                <Route path="/categories" element={<CategoriesPage />} />
                                <Route path="/favourites" element={<Favourites />} />
                                <Route path="/products" element={<PreviousProductPage />} />
                                <Route path="/products/:id/:name" element={<SingleProductPage />} />
                                <Route path="/cart" element={<CartPage />} />
                            </Routes>
                        </Box>
                    </Box>
                }>
                </Route>
            </Route>
            {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
    </Routes>

export default Routing
