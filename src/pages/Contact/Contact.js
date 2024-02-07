// ContactPage.js
import React, { useState } from "react";
import "./Contact.css";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className="contact-container">
        <section className="c-container">
          <h2>Get In Touch</h2>
          <p>
          Have a question or feedback? We're here to listen and assist. Drop us a message, and we'll get back to you promptly.
          </p>
          <div>
            <span className="c-item">
              <span className="phone">
                <LuPhone />
              </span>
              <span className="list">
                <span className="list1">Phone</span>
                <span className="col">+27 69439 2083</span>
              </span>
            </span>

            <span className="c-item">
              <span className="phone">
                <MdOutlineEmail />
              </span>
              <span className="list">
                <span className="list1">Email</span>
                <span className="col">Sikhwwethamulanga@gmail.com</span>
              </span>
            </span>

            <span className="c-item">
              <span className="phone">
                <CiLocationOn />
              </span>
              <span className="list">
                <span className="list1">Location</span>
                <span className="col">71 Devilliers street Turffontein</span>
              </span>
            </span>

            <div className="social">
              <a href="/">
                <span>
                  <FaFacebookF />
                </span>
              </a>
              <a href="/">
                {" "}
                <span>
                  <CiTwitter />
                </span>
              </a>
              <a href="/">
                <span>
                  <CiInstagram />
                </span>
              </a>
              <a href="/">
                {" "}
                <span>
                  <FaLinkedinIn />{" "}
                </span>
              </a>
            </div>
          </div>
        </section>
        <section className="c-second">
          <form onSubmit={handleSubmit} className="">
            <div className="flex">
              <div className="name">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="name">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="subject">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className=" sub">
              <label>Your message</label>
              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button>
              <p>Submit</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
