import {Outlet} from 'react-router-dom';
import {Navbar } from '../components';
import './index.css';


const Layout = () => {


    return ( <div className="flex-wrapper">
        <Navbar/>
        <Outlet/>
    </div> );
}
 
export default Layout;
