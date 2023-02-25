import "./Home.css"
import img3 from "../images/img3.jpeg"
import { motion } from "framer-motion"
import FooterTab from "../components/FooterTab"

export default function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="heading">
        <h1 id="home-title">Welcome</h1>
        <div id="home-subtitle">
          <h4>designed by</h4>
          <h3>EDS</h3>
        </div>
      </div>

      <section className="home-sec-1">
        <motion.img
          src={img3}
          alt="space-forest"
          initial={{ scale: 0.9 }}
          whileHover={{
            scale: 1,
            transition: { type: "spring", bounce: 0.6 },
          }}
        />
        <h2>
          Tristique risus nec feugiat in. Auctor elit sed vulputate mi sit amet.
        </h2>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </h4>
      </section>
      <FooterTab />
    </motion.div>
  )
}
