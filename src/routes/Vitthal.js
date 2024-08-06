import React from 'react'
import { Link } from "react-router-dom";
const Vitthal = () => {
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
      <h1
        style={{
          textAlign: "center",
          color: "orange",
          textDecoration: "underline",
        }}
      >
        <b>Vitthal Rukmini Temple</b>
      </h1>
      <br></br>
      <p>
        Vithoba Temple which is the main temple is situated in the central part
        of the town. The temple has eight entries. The main entrance is the
        eastern one known as Mahadwar which is also called as Namdev Payari,
        because one of the steps known as Namdev Payari is built up over the
        places where the remains of the great saint Namdev are believed to have
        been burried at his desire.
      </p>
      <p>
        After Namdev Payari there are three small rooms called Mukti Mandap.
        After crossing the Mukti Mandap there is a quadrangle of about 120’ x
        60’ with wooden pillars, presently called as Vithal Sabha Mandap. After
        crossing this sabha mandap one enters a hall known as Solkhamb, by
        reason of the fact that its superstructure rests on 16 pillers. One of
        the pillar is plated with Gold at the base and silver above it and is
        known as Garood Khamb. Near solkhamb there is a large stone slab with
        inscription of 1208 A.D. Close to the Solkhamb mandap, towards the
        sanctum is a small hall called Chowkhambh as the superstructure rests on
        four pillars.
      </p>
      <p>
        From the chowkhambhi hall one is let into the shrine or Gabhara, a small
        room about 6’ square consists of a platform of 3’ height with silver
        canopy above and on this platform stands the idol of Shri. Vithoba which
        attracts millions every year. The idol is called by different names
        Vithoba, Pandurang, Pandhari, Vithal, Vithalnath etc. Behind Vithoba
        temple in the north east corner of the temple, facing east is the temple
        of Rukmini, the consort of Vithoba. It has a Gabhara, entry / exit,
        outer hall and a sabha mandap.
      </p>
    </div>
  );
}

export default Vitthal