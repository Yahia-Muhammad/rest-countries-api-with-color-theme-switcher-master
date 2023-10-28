import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./ForHome.css";
import { NavLink } from "react-router-dom";

const ForHome = ({ selectValue, searchValue }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/").then((res) => {
      setData(res.data);
    });
  }, [searchValue]);

  if (data.length === 0) {
    return (
      <>
        <h1 className="vhh">Loadingggg</h1>
      </>
    );
  }
  return (
    <>
      {data
      // filter select
      .filter((item) => {
        return selectValue === "All" ? item : item.region.includes(selectValue);
      })
      // filter search
      .filter((item) => {
        return searchValue.toLowerCase() === '' ? item : item.name.toLowerCase().includes(searchValue)
      })
      // map function
      .map((el, ind) => {
        return (
          <NavLink to={`/country/${el.name}`} key={ind} className={`countrys`}>
            <div className="img-countrys">
              <img src={el.flags.png} alt="german" />
            </div>
            <div className="info-countrys">
              <h3>{el.name}</h3>
              <h4>
                Population: <span>{el.population}</span>
              </h4>
              <h4>
                Region: <span>{el.region}</span>
              </h4>
              <h4>
                Capital: <span>{el.capital}</span>
              </h4>
            </div>
          </NavLink>
        );
      })}
    </>
  );
};

export default ForHome;
