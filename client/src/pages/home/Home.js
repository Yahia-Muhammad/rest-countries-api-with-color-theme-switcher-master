import React, { useState } from "react";
import { useContext } from "react";
import themeContext from "../../config/Theme";
import "./Home.css";
import Header from "../../components/header/Header";
import ForHome from "../../components/get-data/ForHome";

const Home = () => {
  const { theme } = useContext(themeContext);
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("All");
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  }
  const handleSelect = (e) => {
    setSelectValue(e.target.value);
  }
  return (
    <div className={`${theme}`}>
      <Header />
      <div className={`home`}>
        <div>
          <div className="control">
            <div className="search-container">
              <span className="icon-search icon"></span>
              <input
                type="search"
                name=""
                placeholder="Search for a country..."
                value={searchValue}
                onChange={handleSearch}
              />
            </div>
            <select name="" onChange={handleSelect}>
              <option value="All">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
          <div className="all-country">
            <ForHome selectValue={selectValue} searchValue={searchValue} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
