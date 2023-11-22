import React from "react";
import { Logo } from "../../Components/Logo/Logo";
import { Link } from "react-router-dom";
import "./adminmenu.css";
const AdminMenu = () => {
  return (
    <div className="admin-menu">
      <Logo />
      <div className="menu-items">
        <Link to="/admin/questions">
          <button id="btnAllQuestions">TÜM SORULAR</button>
        </Link>
        <Link to="/admin/questions/add">
          <button>SORU EKLE</button>
        </Link>
      </div>
      <div className="btn-home mt-5">
        <Link to="/">
          <button className="btn btn-link text-">Anasayfa</button>
        </Link>
        
      </div>
    </div>
  );
};

export default AdminMenu;
