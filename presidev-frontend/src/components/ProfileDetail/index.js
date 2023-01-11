import { useContext, useEffect } from "react";
import {AuthContext} from '../../context/AuthContext'
import { API_ENDPOINT } from '../../settings'
import axios from 'axios'

const ProfileDetail = () => {
    let { user, authTokens } = useContext(AuthContext);
    useEffect(() => {
        console.log(user)
        const getProfileDetail = async () => {
            const response = await axios.get(`${API_ENDPOINT}/orders/user/?user_type=`, {headers: {Authorization: `Bearer ${authTokens.access}`}})
            let data = await response.json();
            console.log(data);
        };
        getProfileDetail();
    }, [user]);

    return ( <div className="profile-detail">
        <h1>Profile</h1>
    </div> );
}
 
export default ProfileDetail;
