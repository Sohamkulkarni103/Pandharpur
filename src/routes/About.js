import React from 'react'
import { Link } from "react-router-dom"
const About = () => {
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
      <br></br>
      <h1
        style={{
          textAlign: "center",
          color: "orange",
          textDecoration: "underline",
        }}
      >
        <b>About Pandharpur</b>
      </h1>
      <br></br>
      <div className="paragraph">
        <p>
          PANDHARPUR – This is a holy place of Shri.Vitthal and Shri.Rukmini. It
          is also known as the Southern Kashi of India and Kuldaivat of
          Maharashtra State. It is located at a distance of 72 kms by road. from
          Solapur District headquarters. The Pandharpur Railway Station falls on
          the Miraj-Kurduwadi-Latur railway track.
        </p>
        <p>
          {" "}
          The ancient temple of Shri.Vitthal was renovated in 1195 A.D. There
          are many other temples of Indian Dieties and Mathas (Dharmshalas) of
          many Saints. The Chandrabhaga (Bhima) river flows through the City.
          Large number of devotees from all over Maharashtra and surrounding
          States gather at Pandharpur mainly to celebrate the Aashadhi and
          Kartiki Ekadashis every year in addition to the regular rush of
          devotees everyday.
        </p>
        <p>
          {" "}
          The Palaquins (Palakhi) of various Saints originating from various
          locations gather at Wakhari, five kms. from Pandharpur for the Waari
          festival. The various daily rituals like Kakda Aarati, Mahapooja,
          Mahanaivedhya, Poshakh, Dhooparati, Padyapooja, Shejarti etc are
          performed in the main temple of Lord.Vitthal. The following are the
          temples inside the main temple as one enters from Namdev Payari and
          come out of Pachhim Dwar of the temple.
        </p>
      </div>
      <br></br>
      <ul>
        <br></br>
        <h1
          style={{
            textAlign: "center",
            color: "orange",
            textDecoration: "underline",
          }}
        >
          <b>Temples In Pandharpur</b>
        </h1>
        <br></br>
        <li> Namdev Payari – In memory of Shri.Sant Namdev</li>
        <li>Ganesh Mandir</li>
        <li>Datta Mandir</li>
        <li>Garud Mandir</li>
        <li>Maruti Mandir</li>
        <li>Chowrangee Devi Mandir</li>
        <li>Garud Khamb</li>
        <li>Narsimha Mandir</li>
        <li>Ek-mukh Dattatraya Mandir</li>
        <li>Rameshwar Lingam Mandir</li>
        <li>Kala Bahirav Mandir</li>
        <li>Laxmi-Narayan Mandir</li>
        <li>Kashi-Vishwanath Mandir</li>
        <li>Satya-Bhama Mandir</li>
      </ul>
      <h1
        style={{
          textAlign: "center",
          color: "orange",
          textDecoration: "underline",
        }}
      >
        <b>Places of Importance In Pandharpur</b>
      </h1>
      <br></br>
      <ul>
        <li>
          Sant Kaikadi Maharaj Math – It is on the north side of the town. It is
          a modern innovation depicting the ethoes of the epic Gods and Saints.
          It may take minimum two hours to see the entire Math{" "}
        </li>
        <li> Sant Tanapure Maharaj Math </li>
        <li>
          Gujarathi Devsthan – It is on the other side of the river Bhima. The
          pilgrims have to cross the river and visit the Shrinathji Temple.
        </li>
      </ul>
      <br></br>
      <h1
        style={{
          textAlign: "center",
          color: "orange",
          textDecoration: "underline",
        }}
      >
        <b>Major festivals In Pandharpur</b>
      </h1>
      <br></br>
      <p>
        In Pandharpur, Wednesday is regarded as the auspicious day in the week
        and Ekadashi, the auspicious day in the month. The Aashadi, Kartiki,
        Magh and Chaitra Ekadashis are the four major festivals of the temple.
        Out of these four, the first two festivals attract a large crowd about 8
        to 10 lakhs.
      </p>
      <p>
        {" "}
        Apart from these, festivals like Gudipadwa, Ramanavami, Dasara and
        Deepawali are also celebrated. There are three major events Ashadhi
        Ekadashi i.e immediately after onset of Monsoon season. All the farmers
        complete their pre mansoon farming works. All the Warkaris (pilgrims)
        visit Pandharpur Pilgrim Centre from allover India including
        Maharashtra, Karnataka, Gujarat, Rajasthan, Tamilnadu, and Andhra
        Pradesh. States. It is a very big long march of Warkaris (Pilgrims) from
        the various other pilgrim centre from Maharashtra as below.
      </p>
      About 2 lakh Warkaris marching
      <p>
        {" "}
        from pilgrim Alandi of Sant Dnyaneshwara and from Dehu of Sant Tukaram’s
        pilgrim centers and many other warakaris join this march on their way to
        this long route of Alandi-Dehu to Pandharpur. In all about 7 – 8 lakh
        devotees visit Pandharpur for Aashadi Ekadashi. Katiki Ekadashi comes
        immediately after the monsoon season is over and many warakaris visit
        Pandharpur from Dehu, Alandi, Newasa etc. and other parts of
        Maharashtra. About 3 – 4 lakhs devotees visit Pandharpur. Maghi Ekadashi
        comes in the initial period of summer season. About 2 lakh devotees
        visit Pandharpur. Chaitri Ekadashi comes generally in the month of
        April. About 1 lakh devotees visit for this ekadashi.
      </p>
    </div>
  );
}

export default About