import React from 'react'
import { useState } from "react";
import script from '../script';
import { Link } from "react-router-dom"
<script  src="script.js"></script>

const Home = () => {
  return (
    <div>
      <div className="w3-container w3-center w3-animate-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-orange navbar-right">
          <a className="navbar-brand" href="#">
            <img
              src="https://th.bing.com/th/id/OIP.j2C3UiMHvgfRSMJmK5sJagHaI5?rs=1&pid=ImgDetMain"
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
                <Link
                  to="/home"
                  style={{ color: "#fff", margin: "8px", padding: "8px" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  style={{ color: "#fff", margin: "8px", padding: "8px" }}
                >
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
      <div className="w3-container w3-center w3-animate-left">
        <div className="conatiner">
          <div className="row">
            <div className="col-md-2">
              <img
                src="https://th.bing.com/th/id/OIP.aKa3wPEYZ7YLBmln6cQAEwAAAA?rs=1&pid=ImgDetMain"
                width="250px"
                height="250px"
              />
            </div>
            <div className="col-md-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/NUT_7560C.jpg/640px-NUT_7560C.jpg"
                width="250px"
                height="250px"
              />
            </div>
            <div className="col-md-2">
              <img
                src="https://c8.alamy.com/comp/2J1JE6J/pandharpur-india-26-february-2022-vitthal-temple-at-pandharpur-vitthal-rukmini-temple-maharashtra-india-2J1JE6J.jpg"
                width="250px"
                height="250px"
              />
            </div>
            <div className="col-md-2">
              <img
                src="https://static.theprint.in/wp-content/uploads/2021/12/1600px-Vitthal_statue_at_Pandharpur.jpeg"
                width="250px"
                height="250px"
              />
            </div>
            <div className="col-md-2">
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/1a/1a/47/01/shri-gajanan-maharaj.jpg"
                width="250px"
                height="250px"
              />
            </div>
            <div className="col-md-2">
              <img
                src="https://lh5.googleusercontent.com/p/AF1QipN_8gxD88vgp_5I2yR6vzTrJqGF5LCCWbYG-VV5=w1080-k-no"
                width="250px"
                height="250px"
              />
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <marquee class="marq" bgcolor="Voilet" direction="right" loop="">
        <div class="geek2">
          <h2 style={{ color: "white" }}>
            Please Do Visit Spiritual Spots Above!
          </h2>
        </div>
      </marquee>
      <br></br>
      <br></br>
      <h1
        style={{
          color: "orange",
          textDecorationLine: "underline",
          textAlign: "center",
        }}
      >
        <b>About Pandharpur</b>
      </h1>
      <div class="m-4">
        <div class="accordion" id="myAccordion">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                type="button"
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                1. About Pandharpur
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#myAccordion"
            >
              <div class="card-body">
                <p>
                  Pandharpur is a Popular pilgrimage town, on the banks of
                  Chandrabhagā River, near Solapur city in Solapur District,
                  Maharashtra, India. Its administrative area is one of eleven
                  tehsils in the District, and it is an electoral constituency
                  of the state legislative assembly.{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                type="button"
                class="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                2. Why Pandharpur is So Famous?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse show"
              data-bs-parent="#myAccordion"
            >
              <div class="card-body">
                <p>
                  It is famous for the Lord Vitthala temple situated on the bank
                  of Bhima river. Bhima river is also known as Chandrabhaga as
                  it takes shape like crescent moon near the town..{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                type="button"
                class="accordion-button "
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
              >
                3. How much time it takes for Pandharpur Darshan?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse show"
              data-bs-parent="#myAccordion"
            >
              <div class="card-body">
                <p>
                  For padsparsha Darshan it requires 2 to 3 hours on ordinary
                  days, 4 to 5 hours on weekly holidays and Ekadashi day and
                  upto 24 to 36 hours on Yatra days.{" "}
                </p>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                type="button"
                class="accordion-button "
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
              >
                4. Which month is best to visit Pandharpur?
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse show"
              data-bs-parent="#myAccordion"
            >
              <div class="card-body">
                <p>
                  During the months of July and February, the weather in
                  Pandharpur is at its most pleasant Pandharpur
                  temperature-wise. The months of October through February are
                  generally regarded as the best times to see the city's
                  attractions and well-known landmarks.{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button
                type="button"
                class="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
              >
                5. What is story of Vitthal of Pandharpur?
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse show"
              data-bs-parent="#myAccordion"
            >
              <div class="card-body">
                <p>
                  Impressed by Pundalik's devotion to his parents, Lord Vishnu
                  decided to stay back on earth, standing on the brick, taking
                  the form of Vithoba. Over time, a temple was built on the
                  site. While this is an often repeated legend, the worship of
                  Vitthala probably predates Vaishnavism in the region.{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingSix">
              <button
                type="button"
                class="accordion-button collapsed show"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
              >
                6. What is famous in Pandharpur shopping??
              </button>
            </h2>
            <div
              id="collapseSix"
              class="accordion-collapse collapse show"
              data-bs-parent="#myAccordion"
            >
              <div class="card-body">
                <p>
                  Fulchand Bhattad. Perfect spot for high-quality fabric. If
                  you're looking for non-ready-made clothing in Pandharpur,
                  Fulchand Bhattad is a great option. ... Kajree. Home to finest
                  stationery and gift items. ... Sri Hari Tulsi Mala Bhandar.
                  High-quality tulsi malas. ... Marawadekar Mall. Popular
                  shopping hub in the city.{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingSeven">
              <button
                type="button"
                class="accordion-button collapsed show"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
              >
                7. Which Food is famous in Pandharpur?
              </button>
            </h2>
            <div
              id="collapseSeven"
              class="accordion-collapse collapse show"
              data-bs-parent="#myAccordion"
            >
              <div class="card-body">
                <p>
                  The famous food in Pandharpur is the delicious and traditional
                  Maharashtrian dish called "Puran Poli." It's a sweet flatbread
                  filled with a sweet lentil stuffing{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1
        style={{
          color: "orange",
          textDecorationLine: "underline",
          textAlign: "center",
        }}
      >
        <b>Places to Visit In Pandharpur.</b>
      </h1>
      <br></br>
      <div className="conatiner">
        <div className="row">
          <div className="col-md-4">
            <h2 style={{ color: "orange", textAlign: "center" }}>
              <b>Vitthal Rukmini Temple </b>
            </h2>
            <img
              src="https://www.vitthalrukminimandir.org/images/temple_gallery_2.JPG"
              width="400px"
              height="300px"
            />
            <br></br>
            <p>
              The Vithoba Temple, officially known as Shri Vitthal-Rukmini
              Mandir, is a Hindu temple in Pandharpur, in the Indian state of
              Maharashtra It is the main centre of worship for Vithoba, a form
              of the god Vishnu or Krishna, and his consort Rakhumai In
              Hinduism, Vithoba is considered as an incarnation of Lord Vishnu.
              The worship of Vithoba in the Pandharpur temple is based on the
              contents of the Puranas and the contributions of the Vaishnav
              saints of Maharashtra and Karnataka, in Bhakti tradition, during
              the 13th through 17th centuries.
            </p>
          </div>
          <div className="col-md-4">
            <h2 style={{ color: "orange", textAlign: "center" }}>
              <b>Gajanan Maharaj Temple </b>
            </h2>
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/1a/1a/47/01/shri-gajanan-maharaj.jpg"
              width="400px"
              height="300px"
            />
            <br></br>
            <p>
              This is a great place to worship and doubles up as a museum. There
              are statues of almost all saints in Indian mythology and the
              winding pathway takes one from . It's a mathh of Sh kaikadi
              maharaj. They have tried to show you image of whole world inclined
              towards Indian Hindu religion through different statues.
            </p>
          </div>
          <div className="col-md-4">
            <h2 style={{ color: "orange", textAlign: "center" }}>
              <b>Kaikadi Maharaj Math</b>
            </h2>

            <img
              src="https://th.bing.com/th/id/OIP.aKa3wPEYZ7YLBmln6cQAEwAAAA?rs=1&pid=ImgDetMain"
              width="400px"
              height="300px"
            />
            <br></br>
            <p>
              This is a great place to worship and doubles up as a museum. There
              are statues of almost all saints in Indian mythology and the
              winding pathway takes one from . It's a mathh of Sh kaikadi
              maharaj. They have tried to show you image of whole world inclined
              towards Indian Hindu religion through different statues.
            </p>
          </div>
          <br></br>
          <div className="col-md-4">
            <h2 style={{ color: "orange", textAlign: "center" }}>
              <b>Bhima River </b>
            </h2>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/NUT_7560C.jpg/640px-NUT_7560C.jpg"
              width="400px"
              height="300px"
            />
            <br></br>
            <p>
              The Chandrabhaga (Bhima) river flows through the City. Large
              number of devotees from all over Maharashtra and surrounding
              States gather at Pandharpur mainly to celebrate the Aashadhi and
              Kartiki Ekadashis every year in addition to the regular rush of
              devotees everyday
            </p>
          </div>
          <div className="col-md-4">
            <h2 style={{ color: "orange", textAlign: "center" }}>
              <b>Tulsi Vrundavan</b>
            </h2>
            <img
              src="https://static.theprint.in/wp-content/uploads/2021/12/1600px-Vitthal_statue_at_Pandharpur.jpeg"
              width="400px"
              height="300px"
            />
            <br></br>
            <p>
              Tulsi Vrundavan in pandharpur is famous place for new visitors .
              It has a walking track and also Padmavati Lake Nearby. It has a
              Boating facility available for the people.
            </p>
          </div>
          <div className="col-md-4">
            <h2 style={{ color: "orange", textAlign: "center" }}>
              <b>Bhakta Niwas</b>
            </h2>
            <img
              src="https://lh5.googleusercontent.com/p/AF1QipN_8gxD88vgp_5I2yR6vzTrJqGF5LCCWbYG-VV5=w1080-k-no"
              width="400px"
              height="300px"
            />
            <br></br>
            <p>
              Located at a distance of 1km from the Pandharpur bus stand. Shri
              Vitthal Rukmini Bhakta Niwas offers two, five and eight-bed NON-AC
              rooms. Meals and parking spaces for …
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <marquee class="marq" bgcolor="orange" direction="left" loop="">
        <div class="geek2">
          <h2 style={{ color: "white" }}>
            <a href="https://www.vitthalrukminimandir.org/English/home.html">
              {" "}
              FOR ONLINE DARSHAN BOOKING CLICK HERE!
            </a>
          </h2>
        </div>
      </marquee>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30411.382374655528!2d75.2980037558568!3d17.677476328615466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc4181b8db52943%3A0x1ab147f5432da578!2sPandharpur%2C%20Maharashtra%20413304!5e0!3m2!1sen!2sin!4v1707373352696!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Home