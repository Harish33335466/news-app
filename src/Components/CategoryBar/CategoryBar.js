import React, { useState } from "react";
import "./CategoryBar.css";

const keywords = [
  {
    title: "All",
    path: "/",
  },
  {
    title: "Business",
    path: "/business",
  },
  {
    title: "Health",
    path: "/Health",
  },
  {
    title: "Science",
    path: "/Science",
  },
  {
    title: "Technology",
    path: "/Technology",
  },
];

//how to install the react-router dom
//

const CategoryBar = ({ count }) => {
  const [activeElement, setActiveElement] = useState();

  const handleClick = (value) => {
    window.location.pathname = value.path;
    setActiveElement(value.title);
    console.log(value.title);
  };

  return (
    <>
      <div className="categoriesBar">
        {keywords.map((value, i) => (
          <div>
            <span
              onClick={() => handleClick(value)}
              key={i}
              className={
                activeElement === value.title ? "categoriesBar_active" : ""
              }
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              {value.title}
              <span
                className="badge badge-light"
                style={{
                  position: "relative",
                  bottom: "20px",
                  backgroundColor: "red",
                  left: "35px",
                  borderRadius: "50%",
                }}
              >
                {count}
              </span>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryBar;
