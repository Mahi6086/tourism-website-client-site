import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
import img1 from "../../../images/footer/footer-gallery-1.jpg";
import img2 from "../../../images/footer/footer-gallery-2.jpg";
import img3 from "../../../images/footer/footer-gallery-3.jpg";
import img4 from "../../../images/footer/footer-gallery-5.jpg";
import img5 from "../../../images/footer/footer-gallery-6.jpg";
import img6 from "../../../images/footer/footer-gallery-7.jpg";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#212529", marginBottom: "0px" }}
      className="py-5"
    >
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center text-white-50">
          <div className="col-md-3">
            <h4 className="text mt-4">Connect With Us</h4>
            <ul style={{ listStyle: "none", marginLeft: "-30px" }}>
              <li className="d-flex">
                <i className="fas fa-phone-alt text  mt-2"></i>
                <p className="ms-2 fw-bolder">+880 1234 567 890</p>
              </li>
              <li className="d-flex">
                <i className="fas fa-map-marker-alt text mt-2"></i>
                <p className="ms-2 fw-bolder">Gulshan-1,Dhaka,Bangladesh.</p>
              </li>
              <li className="d-flex">
                <i className="fas fa-envelope text mt-2"></i>
                <p className="ms-2 fw-bolder">tevily@gmail.com</p>
              </li>
            </ul>
            <div
              className="row row-cols-md-4 g-1"
              style={{ fontSize: "1.5em" }}
            >
              <span>
                <FontAwesomeIcon className="icon" icon={faFacebook} />
              </span>
              <span>
                <FontAwesomeIcon className="icon" icon={faInstagram} />
              </span>
              <span>
                <FontAwesomeIcon className="icon" icon={faTwitter} />
              </span>
              <span>
                <FontAwesomeIcon className="icon" icon={faWhatsapp} />
              </span>
            </div>
          </div>
          <div className="col-md-3">
            <h4 className="text">Quick Links</h4>
            <ul style={{ listStyle: "none", marginLeft: "-30px" }}>
              <li className="logo">Popular Tour</li>
              <li className="logo">Blog</li>
              <li className="logo">Shop</li>
              <li className="logo">FAQ'S</li>
              <li className="logo">Privacy Policy</li>
            </ul>
          </div>
          <div className="col-md-3 ">
            <h4 className="text">Important Links</h4>
            <ul style={{ listStyle: "none", marginLeft: "-30px" }}>
              <li className="logo">Tour</li>
              <li className="logo">Destination</li>
              <li className="logo">Get In Touch</li>
              <li className="logo">Who We Are</li>
              <li className="logo">Contact Us</li>
            </ul>
          </div>
          <div style={{ marginTop: "70px" }} className="col-md-3">
            <h4 className="text ">Tour Gallery</h4>
            <div className="row row-cols-1 row-cols-md-3 g-2">
              <img className="img-fluid" src={img1} alt="" />
              <img className="img-fluid" src={img2} alt="" />
              <img className="img-fluid" src={img3} alt="" />
              <img className="img-fluid" src={img4} alt="" />
              <img className="img-fluid" src={img5} alt="" />
              <img className="img-fluid" src={img6} alt="" />
            </div>
            {/*  <div
              className="d-flex"
              style={{ fontSize: "1.5em" }}
            >
              <span>
                <FontAwesomeIcon className="icon" icon={faFacebook} />
              </span>
              <span>
                <FontAwesomeIcon className="icon" icon={faInstagram} />
              </span>
              <span>
                <FontAwesomeIcon className="icon" icon={faTwitter} />
              </span>
              <span>
                <FontAwesomeIcon className="icon" icon={faWhatsapp} />
              </span>
            </div> */}
          </div>
          <div>
            <hr className="" />
            <p className="text-center">
              All rights reserved Copyright © 2021 Tevily by{" "}
              <span className="text">Mahi Hasan</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
