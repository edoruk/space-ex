import "./NavBar.css"
import { useState } from "react"

import { NavLink, useLocation } from "react-router-dom"
import { delay, motion } from "framer-motion"

const navLeft = [
  { address: "Home", path: "/" },
  { address: "Live", path: "/live" },
  { address: "Link", path: "/link" },
  { address: "Shop", path: "/shop" },
  { address: "Packs", path: "/packs" },
]

function NavBar() {
  const { pathname } = useLocation()
  const [isActive, setIsActive] = useState(false)

  return (
    <motion.main
      className="nav-bar"
      animate={isActive ? { height: "23rem" } : { height: "4rem" }}
    >
      <div className="top-bar">
        <div
          className={isActive ? "menu-btn open" : "menu-btn"}
          onClick={() => {
            setIsActive(!isActive)
          }}
        >
          <div className="menu-btn-burger"></div>
        </div>
        <p className="logo">Space Ex</p>
      </div>

      <motion.ul
        className="nav-left"
        animate={isActive ? { display: "flex", opacity: 1 } : ""}
      >
        {navLeft.map((item, index) => {
          return (
            <NavLink
              to={item.path}
              key={index}
              className="nav-link"
              onClick={
                window.innerWidth < 511
                  ? () => {
                      setIsActive(!isActive)
                    }
                  : ""
              }
            >
              {item.address}
              {pathname === item.path && (
                <motion.span
                  name={item.address}
                  className="line"
                  layoutId="rect"
                  transition={{ duration: 1, delay: 0.1 }}
                ></motion.span>
              )}
            </NavLink>
          )
        })}
      </motion.ul>
    </motion.main>
  )
}

export default NavBar
