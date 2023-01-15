import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { Sidebar, OrderDetail, ProfileDetail, WishlistDetail } from "../../components";
import { Route, Routes } from "react-router-dom";
import { CategoriesPage } from "..";

const MenuPage = (props) => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <section className="profile-hero">
        <div className="hero-body px-5">
          <h1 className="text-white">{user?.profile?.organisation?.name || 'No organisation'}</h1>
          <p>{`${user?.profile?.organisation?.location?.county || ''}, ${user?.profile?.organisation?.location?.country || ''}`}</p>
        </div>
      </section>
      <section className="profile-content-container d-md-flex">
        <Sidebar />
      </section>
    </>
  );
};

export default MenuPage;
