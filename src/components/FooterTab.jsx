import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"
import {
  faFacebook,
  faSquareTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const items = [{ path: "/about", address: "About" }, ,]

function FooterTab() {
  return (
    <div className="footer-main">
      <section className="footer-links">
        {items.map((item, i) => {
          return (
            <Link className="footer-link" key={i} to={item.path}>
              {item.address}
            </Link>
          )
        })}
      </section>
      <section className="footer-social">
        <a href="https://facebook.com">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com">
          <FontAwesomeIcon icon={faSquareTwitter} />
        </a>
        <a href="https://github.com">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </section>
    </div>
  )
}

export default FooterTab
