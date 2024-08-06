import React from 'react'
import { Link } from "react-router-dom";
const Education = () => {
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
        <b>Education in Pandharpur</b>
      </h1>
      <br></br>

      <h3>
        <b>
          Pandharpur has a best quality of education in solapur District with Jr
          and Sr KG'S ,Schools, High Schools,Colleges etc. The well known
          pandharpur education society was established in year 1946 with 2 main
          branches DHK Prashala and Kawathekar Prashala
        </b>
      </h3>
      <br></br>
      <h3>List of schools in pandharpur</h3>
      <br></br>
      <ul>
        <li>English Medium School,Pandharpur</li>
        <li>Phoenix English Medium School, Pandharpur</li>
        <li>Adarsh Prathamik Vidyalaya,Pandharpur</li>
        <li>Arihant Public School</li>
        <li>Karmayogi Vidyaniketan, Pandharpur</li>
        <li>Yashwant Vidyalay, Pandharpur</li>
        <li>Pancharatna English High School</li>
        <li>Rajaram English school and junior college</li>
      </ul>
      <h3>List of High schools in pandharpur</h3>
      <br></br>
      <ul>
        <li>DH Kawathekar Prashala,Pandharpur</li>
        <li>Kawathekar Prashala,Pandharpur</li>
        <li>Adhyapak Vidyalaya,Pandharpur</li>
      </ul>
      <h3>List of Colleges in pandharpur</h3>
      <br></br>
      <ul>
        <li>SKN Sinhgad College Korti,Pandharpur</li>
        <li>College of Engineering,Pandharpur</li>
        <li>Uma College,Pandharpur</li>
      </ul>
      <br></br>
      <h4>
        <b>
          The city has variety of educational institutes with quality education
          and infrastructure for the overall betterment of students.
        </b>
      </h4>
    </div>
  );
}

export default Education