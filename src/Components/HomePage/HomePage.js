import React from "react";
import "./HomePage.css";
import Header from "../Header/Header";
import CategoryBar from "../CategoryBar/CategoryBar";
import HomePagedata from "./HomePagedata/HomePagedata";
import { useSelector } from "react-redux";

const HomePage = () => {
  let category_Data = useSelector((state) => state.allData.data);
  let count=category_Data.length;
  return (
    <div className="homepage-container">
      <Header />
      <div
        className="homepage-content"
        style={{ display:"inline",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius:"20px",padding:"10px"}}
      >
        Top Stories for you
      </div>
      <div className="Category-bar">
        <CategoryBar count={count} />
      </div>
      <div className="homepage-area">
        <HomePagedata />
      </div>
    </div>
  );
};

export default HomePage;
