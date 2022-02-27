import React from "react";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.bgTheme} bg-${props.bgTheme}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
            <div className="form-check form-switch fs-4">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                onClick={props.toggleMode}
              />
              <label className={`form-check-label text-${props.fontTheme} fs-5 pe-4`} htmlFor="flexSwitchCheckChecked">
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
