import React from "react";
import "../styles/Navbar.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import TableChartIcon from "@mui/icons-material/TableChart";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div id="navbar">
      <div className="container">
        <div className="navbar">
          <div className="navbar-logo">
            <img
              style={{ borderRadius: "50%" }}
              width={85}
              src="https://ja.stat.kg/Index.files/stat.kg-logo.png"
              alt=""
            />
            <h1>АИС НАСЕЛЕНИЕ</h1>
          </div>
          <nav>
            <div className="nav-block">
              <BorderColorIcon />
              <h1>СПИСОК ОШИБОК</h1>
            </div>
            <div className="nav-block">
              <TableChartIcon />
              <h1>ВЫХОДНЫЕ ТАБЛИЦЫ</h1>
            </div>
            <div className="nav-block">
              <TableChartIcon />

              <h1>ИСТОРИЯ ИЗМЕНЕНИЙ</h1>
            </div>
            <Link to='/add'>
              <h1>| Добавить</h1>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
