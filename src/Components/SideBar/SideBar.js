import React from "react";
import "./SideBar.css";
import { SideBarData } from "./SideBarData";
import Logo from "../../Assets/Logo.png";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  function linkhandler(val) {
    navigate(val.path);
  }
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <img src={Logo} className="logo-img" alt="logo"></img>
        <div className="logo-text">Aster News</div>
      </div>
      <ul className="sidebar-list">
        {SideBarData.map((val, key) => {
          return (
            <li
              key={key}
              onClick={() => {
                linkhandler(val);
              }}
              style={{
                boxShadow: "0px -5px 10px 0px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div
                className="sidebar-list-item"
                style={{
                  display: "flex",
                  gap: "5px",
                  marginTop: "20px",
                  textAlign: "center",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  cursor: "pointer",
                }}
              >
                <div style={{ padding: "1px 8px", color: "#45b8fc" }}>
                  {val.icon}
                </div>
                <span
                  style={{
                    color: "#45b8fc",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  {val.title}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
