import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav
    className="navbar navbar-expand-lg bg-body-tertiary"
    style={{ marginTop: 10 }}
  >
    <div className="container-fluid">
      <Link to="/">
        <img
          src="https://i.pinimg.com/originals/57/63/db/5763db0f4dc995d99b6ea0af7735cb8b.png"
          width="80px"
          height="80px"
          style={{ marginLeft: 20 }}
        />
        </Link>
     
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item" style={{ marginLeft: 10 }}>
            <a className="nav-link active" aria-current="page" href="" >
         
            <h6 className="speaker-link">
  <Link to="/featured" className="speaker-link-text">FEATURED</Link>
</h6>            </a>
          </li>
          <li className="nav-item" style={{ marginLeft: 10 }}>
            <a className="nav-link active" aria-current="page" href="#">
            <h6 className="speaker-link">
  <Link to="/headphone" className="speaker-link-text">HEADPHONES</Link>
</h6>            </a>
          </li>
          <li className="nav-item" style={{ marginLeft: 10 }}>
            <a className="nav-link active" aria-current="page" href="#">
            <h6 className="speaker-link">
  <Link to="/speaker" className="speaker-link-text">SPEAKERS</Link>
</h6>            </a>
          </li>
          <li className="nav-item" style={{ marginLeft: 10 }}>
            <a className="nav-link active" aria-current="page" href="#">
              <h6 style={{ fontSize: 15 }}>SOUNDBAR</h6>
            </a>
          </li>
          <form
            className="d-flex"
            role="search"
            style={{ marginLeft: 40, width: 500, height: 30, marginTop: 12 }}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for products,brands and more"
              aria-label="Search"
            />
          </form>
          <li className="nav1" style={{ marginLeft: 80 }}>
            <i className="fa-regular fa-user" style={{ marginLeft: 14 }} />
            <h6>Profile</h6>
          </li>
          <li className="nav1" style={{ marginLeft: 50 }}>
            <i className="fa-regular fa-heart" style={{ marginLeft: 15 }} />
            <h6>Wishlist</h6>
          </li>
          <li className="nav1" style={{ marginLeft: 50 }}>
            <i className="fa-solid fa-bag-shopping" style={{ marginLeft: 5 }} />{" "}
            <a
              className="nav-link active"
              aria-current="page"
              href="./bag.html"
              target="_blank"
            >
              <h6 style={{ marginTop: "-8px", marginLeft: "-8px" }}>Bag</h6>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  

  )
}

export default Navbar