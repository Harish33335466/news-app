import React from "react";
import { useSelector } from "react-redux";

const HomePagedata = () => {
  const Homepagedata = useSelector((state) => state.allData.data);
  console.log(Homepagedata);
  const slicedData = Homepagedata.slice(1, 2);
  const slicedData2 = Homepagedata.slice(2, 19);
  console.log(slicedData2);
  const imagesrc = slicedData.map((data) => {
    return data.urlToImage;
  });
  return (
    <div>
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
              <a href={slicedData.map((data) => data.url)}>
                <h5 className="card-title" style={{ fontWeight: "bolder" }}>
                  {slicedData.map((data) => data.title)}
                </h5>
              </a>

              <p className="card-text" style={{ marginTop: "20px" }}>
                {slicedData.map((data) => data.description)}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src={imagesrc}
              style={{ height: "225px" }}
              className="card-img"
              alt="..."
            />
          </div>
        </div>
      </div>
      {slicedData2.map((data) => (
        <div
          className="row row-cols-2 row-cols-md-2 g-4"
          style={{
            marginTop: "25px",
          }}
        >
          <div className="col-md-8">
            <div
              className="card"
              style={{
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                width: "800px",
                display: "flex",
              }}
            >
              <img
                src={data.urlToImage ? data.urlToImage : imagesrc}
                className="card-img-top"
                alt="..."
                style={{ height: "325px" }}
              />
              <div className="card-body">
                <a href={data.url}>
                  <h5 className="card-title">{data.title}</h5>
                </a>
                <p className="card-text">
                  {data.description
                    ? data.description
                    : slicedData.map((data) => data.description)}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePagedata;
