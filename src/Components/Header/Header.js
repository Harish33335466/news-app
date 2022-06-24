import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { dummyData } from "../../Redux/Actions/DataActions";
const Header = () => {
  const dispatch = useDispatch();

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
      <div className="dummy-button" style={{ marginTop: "20px" }}>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(dummyData())}
        >
          Dummy Button
        </button>
      </div>
    </div>
  );
};

export default Header;
