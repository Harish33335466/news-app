import React from "react";
import "../HomePage/HomePage.css";
import Header from "../Header/Header";
import CategoryBar from "../CategoryBar/CategoryBar";
import { createBrowserHistory } from "history";
import { categoryData } from "../../Redux/Actions/DataActions";
import { useSelector, useDispatch } from "react-redux";
const Categories = () => {
  //get an id using params
  const history = createBrowserHistory();
  let searchquery = history.location.pathname;
  let id = searchquery.split("/")[1];
  console.log(id);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${id}&apiKey=eb5039b9e1214d919d518a610a610a54`
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
        dispatch(categoryData(articles, id));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    return () => {
      fetchData();
    };
  }, [id]);

  let category_Data = useSelector((state) => state.allData.data);
  let count=category_Data.length;
  Object.keys(category_Data).forEach((key) => {
    if (categoryData[key] === null) {
      delete categoryData[key];
    }
  });

  return (
    <div className="homepage-container">
      <Header />
      <div className="homepage-content">Top Stories for you</div>
      <div className="Category-bar">
        <CategoryBar count={count} />
      </div>
      <div
        className="card-area"
        style={{ marginTop: "30px", marginLeft: "20px" }}
      >
        {category_Data.map((data) => {
          return (
            <div
              className="card mb-3"
              style={{
                width: "800px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
            >
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: "bolder" }}>
                      {data.title}
                    </h5>
                    <p className="card-text" style={{ marginTop: "20px" }}>
                      {data.description}
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <img
                    src={data.urlToImage}
                    style={{ height: "225px" }}
                    className="card-img"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
