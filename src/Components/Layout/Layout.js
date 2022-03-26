import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  const [searchTerm, setSearchTerm] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let path = "/searchpage";
    navigate(path, { state: { searchTerm: searchTerm.toLowerCase() } });
    console.log(searchTerm);
  };

  return (
    <div>
      <Header>
        {
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm kiếm..."
              aria-label="Search"
            />

            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        }
      </Header>
      <div className="body">{props.children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
