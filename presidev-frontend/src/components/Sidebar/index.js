const Sidebar = ({ profileClick, ordersClick, wishlistClick}) => {
    return ( 
    <div className="sidebar">

        <div className="sidebar__item">
            <ul className="sidebar__list d-flex flex-column">
                <li className="sidebar__list-item active" onClick={profileClick}>
                        Profile
                </li>
                <li className="sidebar__list-item" onClick={ordersClick}>
                        Orders
                </li>
                <li className="sidebar__list-item" onClick={wishlistClick}>      
                        Wishlist
                </li>
            </ul>
        </div>


    </div> );
}
 
export default Sidebar;
