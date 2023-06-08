import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="header-fixed">
      <nav className="header-new container">
        <div className="header-new-logo">
          <div className="header-new-cross"></div>
          <a href="/">
            <img
              src="https://drim.one/img/drim-logo.svg"
              alt="logo DRIM"
              width={100}
              height={29}
            ></img>
          </a>
        </div>
        <div className="header-new-menu ">
          <ul className="container menu-drim-head">
            <li className="header-new-menu-item">
              <a href="/brands">
                For Brands
              </a>
            </li>
            <li className="header-new-menu-item ">
              <a href="/influencers">
                For Influencers
              </a>
            </li>
            <li
              className="header-new-menu-more-item dropdown"
            >
              <a
                href=""
                className="header-new-menu-more-button header-new-menu-button-width-arrow"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                data-toggle="dropdown"
              >
                More
                <span
                  className="arrow-down"
                ></span>
              </a>
              <ul
                className="header-new-menu-more-list dropdown-menu"
              >
                <li
                  className="header-new-menu-item-moved"
                >
                  <a href="/vacancies">
                    Careers
                  </a>
                </li>
                <li
                  className="header-new-menu-item-moved"
                >
                  <a href="/job">
                    Work as a manager
                  </a>
                </li>
                <li
                  className="header-new-menu-item-moved"
                >
                  <a href="/comments">
                    Reviews
                  </a>
                </li>
                <li
                  className="header-new-menu-item-moved"
                >
                  <a href="/blog">
                    Blog
                  </a>
                </li>
                <li
                  className="header-new-menu-item-moved"
                >
                  <a href="/about-us">
                    About Us
                  </a>
                </li>
                <li
                  className="header-new-menu-item-moved"
                >
                  <a href="/contacts">
                    Contacts
                  </a>
                </li>
                <li
                  className="header-new-menu-item-  header-new-menu-item-moved"
                >
                  <a
                    className="btn btn-z-"
                    href="https://dash.drim.one"
                  >
                    Log in
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="header-new-buttons">
          <div
            className="dropdown header-new-buttons-lang"
          >
            <a
              className="btn-lang"
              href="#"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="current-lang">
                en
              </span>
              <span
                className="flag-icon flag-icon-gb"
              ></span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-left"
            >
              <a
                className="dropdown-item"
                href="https://drim.one/br/"
              >
                <span
                  className="flag-icon flag-icon-br"
                ></span>
                <span className="country-name">
                  Brazil
                </span>
              </a>
              <a
                className="dropdown-item"
                href="https://drim.one/mx/"
              >
                <span
                  className="flag-icon "
                ></span>
                <span className="country-name">
                  Mexico
                </span>
              </a>
              <a
                className="dropdown-item"
                href="https://drim.one/us/?ip_country=US"
              >
                <span
                  className="flag-icon flag-icon-us"
                ></span>
                <span className="country-name">
                  United States
                </span>
              </a>
              <a
                className="dropdown-item "
                href="https://drim.one/us/?ip_country=IN"
              >
                <span
                  className="flag-icon flag-icon-in"
                ></span>
                <span className="country-name">
                  India
                </span>
              </a>
            </div>
          </div>
          <a href="/login" className="btn btn-z-">
            Log in
          </a>
          <div
            className="dropdown dropdown-menu-left"
          >
            <a
              className="btn btn-z-signup"
              href="/registration"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sign Up
            </a>
            <div
              className="dropdown-menu dropdown-menu-right dropdown-menu-z-signup"
            >
              <div className="dropdown-body">
                <a
                  className="dropdown-item"
                  href="https://dash.drim.one/signup/blogger"
                >
                  I am influencer
                </a>
                <a
                  className="dropdown-item"
                  href="/brief"
                >
                  I am advertiser
                </a>
                <a
                  className="dropdown-item"
                  href="/job-seeker"
                >
                  I am manager
                </a>
              </div>
              <div
                className="dropdown-footer d-xl-none "
              >
                <a
                  href="https://dash.drim.one"
                  className="dropdown-item "
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7ZM20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z"
                      fill="black"
                    ></path>
                  </svg>
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
