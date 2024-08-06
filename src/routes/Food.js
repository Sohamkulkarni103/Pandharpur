import React from 'react'
import { Link } from "react-router-dom";
const Food = () => {
  return (
    <div>
      <div className="w3-container w3-center w3-animate-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-orange navbar-right">
          <a className="navbar-brand" href="#">
            <img
              src="https://wallpapercave.com/wp/wp8742932.png"
              width="80px"
              height="80px"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" style={{ color: "#fff", margin: "8px" }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" style={{ color: "#fff", margin: "8px" }}>
                  About pandharpur
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/vitthal" style={{ color: "#fff", margin: "8px" }}>
                  Vitthal Rukmini Temple
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/life" style={{ color: "#fff", margin: "8px" }}>
                  Life Style
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/education" style={{ color: "#fff", margin: "8px" }}>
                  Education in Pandharpur
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/food" style={{ color: "#fff", margin: "8px" }}>
                  Food Culture in Pandharpur
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <h1
        style={{
          textAlign: "center",
          color: "orange",
          textDecoration: "underline",
        }}
      >
        <b>List of famous foods in Pandharpur</b>
      </h1>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3>
              <b>Pandharpuri Chiwda</b>
            </h3>
            <img
              src="https://2.bp.blogspot.com/-NVPJ-3ZG2lM/VHzLcthbnnI/AAAAAAAAAiI/iB5oWJqvGhk/s1600/chiwda.jpg"
              width="300px"
              height="300px"
            />
          </div>
          <div className="col-md-3">
            <h3>
              <b>Baraskar Wada</b>
            </h3>
            <img
              src="https://1.bp.blogspot.com/-lGoyNIrMj04/XoF7tAMf1fI/AAAAAAAARIc/407UbfrR4kwLBv7QcjUQsBu5etwn4NXzACLcBGAsYHQ/s1600/Vada-Pav-00009.jpg"
              width="300px"
              height="300px"
            />
          </div>
          <div className="col-md-3">
            <h3>
              <b>Aadmile Bhel</b>
            </h3>
            <img
              src="https://th.bing.com/th/id/OIP.N2x-pRtblBlJCvBsFqtIMwHaE7?rs=1&pid=ImgDetMain"
              width="300px"
              height="300px"
            />
          </div>
          <div className="col-md-3">
            <h3>
              <b>Dawangiri Dosa</b>
            </h3>
            <img
              src="https://img-global.cpcdn.com/recipes/2165e4f38648a4b9/680x482cq70/davangere-benne-dosa-butter-dosa-recipe-main-photo.jpg"
              width="300px"
              height="300px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food