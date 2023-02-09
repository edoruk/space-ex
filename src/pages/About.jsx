import "./About.css"
import img_about from "../images/img-about.jpeg"
import { motion } from "framer-motion"
import FooterTab from "../components/FooterTab"

export default function About() {
  return (
    <div>
      <div className="about">
        <h1 className="about-title">About Us</h1>
        <section className="about-sec1">
          <div className="card">
            <img className="card-img" src={img_about} alt="img-about" />
            <div className="card-body">
              <h1 className="card-title">Info</h1>
              <p className="card-subtitle">
                Ut lectus arcu bibendum at varius vel pharetra vel. Et egestas
                quis ipsum suspendisse ultrices. Malesuada fames ac turpis
                egestas. Mauris rhoncus aenean vel elit scelerisque. In nisl
                nisi scelerisque eu ultrices vitae auctor eu.
              </p>
              <motion.button
                className="card-submit"
                whileTap={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Contact
              </motion.button>
            </div>
          </div>
          <h3 className="about-sec1-h3">
            Sed risus pretium quam vulputate. Vehicula ipsum a arcu cursus vitae
            congue. Curabitur vitae nunc sed velit dignissim sodales ut eu.
            Ultrices neque ornare aenean euismod elementum nisi quis. Purus sit
            amet luctus venenatis lectus magna fringilla urna porttitor.
            Suspendisse ultrices gravida dictum fusce. Id diam vel quam
            elementum pulvinar etiam non. Posuere sollicitudin aliquam ultrices
            sagittis orci a scelerisque purus.
          </h3>
        </section>
      </div>
      <FooterTab />
    </div>
  )
}
