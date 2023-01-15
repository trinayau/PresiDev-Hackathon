import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { Sidebar, OrderDetail, ProfileDetail, Favourites } from "../../components";

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
    profileItem.classList.remove('profile-active');
    const ordersItem = document.querySelector('.sidebar__list-item:nth-child(2)');
    ordersItem.classList.remove('profile-active');
    const wishlistItem = document.querySelector('.sidebar__list-item:nth-child(3)');
    wishlistItem.classList.remove('profile-active');
    if (item === "profileItem") {
      profileItem.classList.add('profile-active');
    }
    if (item === "ordersItem") {
      ordersItem.classList.add('profile-active');
    }
    if (item === "wishlistItem") {
      wishlistItem.classList.add('profile-active');
    }

  }

  return (
    <>
      <section className="profile-hero">
        <div className="hero-body px-5">
          <h1 className="text-white">{user?.profile?.organisation?.name || 'No organisation'}</h1>
          <p>{`${user?.profile?.organisation?.location?.county || ''}, ${user?.profile?.organisation?.location?.country || ''}`}</p>
        </div>
      </section>
      <section className="profile-content-container d-md-flex">
        <div className="profile-left">

        <Sidebar profileClick={profileClick} ordersClick={ordersClick} wishlistClick={wishlistClick} />
        </div>
        <div className="profile-right">
        {profile && <ProfileDetail />}
        {orders && <OrderDetail />}
        {wishlist && <Favourites />}
        </div>
      </section>
    </>
  );
};

export default AccountPage;
