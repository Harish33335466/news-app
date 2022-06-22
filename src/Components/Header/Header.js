import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-location-search-container">
        <div className="header-searchbar">
          <i class="fi fi-rr-search absolute-center search-icon"></i>
          <input placeholder="Search for News" className="search-input" />
        </div>
      </div>
      <div className="trend-container">
        <div
          className="trend-title"
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          Latest news on Covid-19{" "}
          <span
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              marginLeft: "20px",
              marginTop: "3px",
              minWidth: "100px",
            }}
            className="col-4"
          >
            <i class="fi fi-rr-arrow-small-right"></i>
          </span>
        </div>
      </div>
      <div className="dashboard-img">
        <button type="button" class="btn btn-lg btn-primary">
          Login
          <span style={{marginLeft:"20px"}}>
            <i className="fi fi-rr-user"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
