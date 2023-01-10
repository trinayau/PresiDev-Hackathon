import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { Sidebar, OrderDetail, ProfileDetail, WishlistDetail } from "../../components";

const AccountPage = () => {
  const { user } = useContext(AuthContext);
    const [profile, setProfile] = useState(true);
    const [orders, setOrders] = useState(false);
    const [wishlist, setWishlist] = useState(false);

    const profileClick = () => {
        setProfile(true);
        setOrders(false);
        setWishlist(false);
        toggleActiveClass("profileItem")
    }

    const ordersClick = () => {
        setProfile(false);
        setOrders(true);
        setWishlist(false);
        toggleActiveClass("ordersItem")
    }

    const wishlistClick = () => {
        setProfile(false);
        setOrders(false);
        setWishlist(true);
        toggleActiveClass("wishlistItem")
    }

    const toggleActiveClass = (item) => {
        const profileItem = document.querySelector('.sidebar__list-item:nth-child(1)');
        profileItem.classList.remove('active');
        const ordersItem = document.querySelector('.sidebar__list-item:nth-child(2)');
        ordersItem.classList.remove('active');
        const wishlistItem = document.querySelector('.sidebar__list-item:nth-child(3)');
        wishlistItem.classList.remove('active');
        if(item === "profileItem"){
            profileItem.classList.add('active');
        }
        if(item === "ordersItem"){
            ordersItem.classList.add('active');
        }
        if(item === "wishlistItem"){
            wishlistItem.classList.add('active');
        }

    }

  return (
    <>
      <section className="profile-hero">
        <div className="hero-body px-5">
          <h1 className="text-white">X Hospital</h1>
          <p>Kyiv, Ukraine</p>
        </div>
      </section>
      <section className="profile-content-container d-flex">
        <Sidebar profileClick={profileClick} ordersClick={ordersClick} wishlistClick={wishlistClick}/>

        {profile && <ProfileDetail/>}
        {orders && <OrderDetail/>}
        {wishlist && <WishlistDetail/>}
        

      </section>
    </>
  );
};

export default AccountPage;
