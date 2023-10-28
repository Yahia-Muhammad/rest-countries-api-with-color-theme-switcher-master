import React from "react";
import { useState, useEffect, useContext } from "react";
import ThemeProvider from "../../config/Theme";
import Axios from "axios";
import Header from "../../components/header/Header";
import "./Country.css";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Country = () => {
  const [data, setData] = useState([]);
  let { countryName } = useParams();

  const { theme } = useContext(ThemeProvider);

  useEffect(() => {
    Axios.get(`http://localhost:3002/${countryName}`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className={`${theme} vh`}>
      <Header />
      <div className={`country`}>
        <div>
          <div className="div-btn-back">
            <NavLink to={"/"}>
              <button>
                <span className="icon-arrow-left"></span>Back
              </button>
            </NavLink>
          </div>
          <div className="detail">
            <div>
              <img src={data.flag} alt="co" />
            </div>
            <div className="detail-country">
              <div>
                <h1>{data.name}</h1>
              </div>

              <div>
                <div>
                  <h4>
                    Native Name: <span>{data.nativeName}</span>
                  </h4>
                  <h4>
                    Population: <span>{data.population}</span>
                  </h4>
                  <h4>
                    Region: <span>{data.region}</span>
                  </h4>
                  <h4>
                    Sub Region: <span>{data.subregion}</span>
                  </h4>
                  <h4>
                    Capital: <span>{data.capital}</span>
                  </h4>
                </div>
                <div>
                  <h4>
                    Top Level Domain: <span>{data.topLevelDomain}</span>
                  </h4>
                  <h4>
                    Currencies:{" "}
                    {data.currencies?.map((val, ind) => (
                      <span key={ind}>{val.code}</span>
                    ))}{" "}
                  </h4>
                  <h4>
                    Languages:{" "}
                    {data.languages?.map((val, ind) => (
                      <span key={ind}>{val.name}, </span>
                    ))}
                  </h4>
                </div>
              </div>

              <div>
                <h4>Border Countries: </h4>
                <div>
                  {data.borders?.map((val, ind) => (
                    <span key={ind} className="broders">
                      {val},{" "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
