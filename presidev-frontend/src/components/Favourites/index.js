import {useState, useEffect} from 'react';
import { API_ENDPOINT } from '../../settings';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {FavouriteCard} from '../../components';
import './index.css'
import { Snackbar } from '@mui/material';
import { Alert } from '@mui/material';

const Favourites = () => {

    const [favourites, setFavourites] = useState([]);
    const [message, setMessage] = useState('');
    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
      const [check, setCheck] = useState(false);
      let { authTokens } = useContext(AuthContext);

    useEffect(() => {
        const getFavourites = async () => {
            const result = await axios.get(`${API_ENDPOINT}/orders/favitem/`, { headers: { Authorization: `Bearer ${authTokens.access}` } });
            console.log(result.data)
            setFavourites(result.data);
        }
        getFavourites();
    }, []);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
    
        setState({ vertical: "top", horizontal: "center", open: false });
      };

    // remove favourite from favourites list
    const removeFavourite = async (id) => {
        const response = await axios.delete(`${API_ENDPOINT}/orders/favitem/${id}/`, { headers: { Authorization: `Bearer ${authTokens.access}` } });
        console.log(response.data)
        setMessage(response.data.message)
        setState({open: true, vertical: 'top', horizontal: 'center'})
        setFavourites(favourites.filter((favourite) => favourite.id !== id));
    }

    

    return ( <div className="favourites-container">
                 
    <div className="favourites-heading h1">Favourites</div>

    <div className="favourites-list">
        {favourites.map((favourite) => (
            <FavouriteCard key={favourite.id} favourite={favourite} removeFavourite={removeFavourite} />
        ))}
  </div>
    </div> );
}
 
export default Favourites;
