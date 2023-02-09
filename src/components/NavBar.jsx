import React from "react"
import "./NavBar.css"
import { NavLink, useLocation } from "react-router-dom"
import { motion } from "framer-motion"

const navLeft = [
  { address: "Home", path: "/" },
  { address: "Live", path: "/live" },
  { address: "Link", path: "/link" },
  { address: "Shop", path: "/shop" },
  { address: "Packs", path: "/packs" },
]

function NavBar() {
  const { pathname } = useLocation()
  return (
    <main className="nav-bar">
      <ul className="nav-left">
        {navLeft.map((item, index) => {
          return (
            <NavLink to={item.path} key={index} className="nav-link">
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
      </ul>
    </main>
  )
}

export default NavBar
