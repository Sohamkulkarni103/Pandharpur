import React from 'react'
import { Link } from "react-router-dom";
const Life = () => {
  return (
    <div>
      <div className="w3-container w3-center w3-animate-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-orange navbar-right">
          <a className="navbar-brand" href="#">
            <img
              src="https://th.bing.com/th/id/OIP.KUvvxkNn_Y0pCRKyDYTBNwHaFj?w=237&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
                {/* <a
                  className="nav-link"
                  href="#"
                  style={{ color: "#fff", margin: "8px" }}
                >
                  Home
                </a> */}
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
      <br></br>
      <h1
        style={{
          textAlign: "center",
          color: "orange",
          textDecoration: "underline",
        }}
      >
        <b>Life Style of Peoples In Pandharpur</b>
      </h1>
      <br></br>
      <h3>
        <b>Comfortable LifeStyle</b>
      </h3>
      <br></br>
      <p>
        Pandharpur is the main city in solapur District in all Aspects such as
        Education,Infrastructure, Cost of living. It is the semi Urban city and
        It has very Comfortable Lifestyle as compared to Pune . It is a
        religious place with all facilities such as bus-stand, railway station.
        t is a good place to live for a salaried person budget-wise. It is a
        Peaceful place to live
      </p>
      <br></br>
      <h3>
        <b>4 Reasons why should you live in pandharpur</b>
      </h3>
      <br></br>
      <ol>
        <li>Pandharpur is becoming developing city in solapur district</li>
        <li>Peaceful Climate</li>
        <li>Cultural Value</li>
        <li>Employment Opportunities</li>
      </ol>
    </div>
  );
}

export default Life