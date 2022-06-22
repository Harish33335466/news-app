import "./App.css";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./Components/SideBar/SideBar";
import HomePage from "./Components/HomePage/HomePage";
import { useDispatch } from "react-redux";
import { DataLoading } from "./Redux/Actions/DataActions";
import { Routes, Route } from "react-router-dom";
import Categories from "./Components/Categories/Categories";

function App() {
  const dispatch = useDispatch();
  let category = "All category";
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=eb5039b9e1214d919d518a610a610a54"
      );
      const data = await response.json();
      let articles = data.articles;
      articles = articles.map((article) => {
        return {
          title: article.title,
          description: article.description,
          url: article.url,
          urlToImage: article.urlToImage,
          publishedAt: article.publishedAt,
          source: article.source.name,
        };
      });
      dispatch(DataLoading(articles, category));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
    console.log("I am here");
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <SideBar /> <HomePage />
            </>
          }
        />
        <Route
          path="/business"
          element={
            <>
              {" "}
              <SideBar /> <Categories />
            </>
          }
        />
        <Route
          path="/Health"
          element={
            <>
              {" "}
              <SideBar /> <Categories />
            </>
          }
        />
        <Route
          path="/Health"
          element={
            <>
              {" "}
              <SideBar /> <Categories />
            </>
          }
        />
        <Route
          path="/Science"
          element={
            <>
              {" "}
              <SideBar /> <Categories />
            </>
          }
        />
        <Route
          path="/Technology"
          element={
            <>
              <SideBar /> <Categories />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
