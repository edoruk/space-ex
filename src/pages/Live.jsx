import React, { useState } from "react"
import "./Live.css"
import { motion } from "framer-motion"
import img1 from "../images/img1.jpeg"
import img2 from "../images/img2.jpeg"
import img3 from "../images/img3.jpeg"
import FooterTab from "../components/FooterTab"

const images = [img1, img2, img3]

export default function Live() {
  const [check, setCheck] = useState(false)

  return (
    <motion.div
      className="live"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <h1>Live</h1>
      <div className="live-sec-1">
        <h3 className="sec-1-h3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Bibendum ut tristique et egestas quis
          ipsum suspendisse. Arcu risus quis varius quam quisque id diam vel.
          Nisl condimentum id venenatis a. Egestas integer eget aliquet nibh
          praesent. Consectetur lorem donec massa sapien faucibus. Lacus viverra
          vitae Ornare arcu dui vivamus arcu felis bibendum ut tristique. Non
          enim praesent elementum facilisis leo. Egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Convallis tellus id interdum velit
          laoreet id.
        </h3>

        <h3 className="sec-1-h3">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Bibendum ut tristique et egestas quis ipsum suspendisse. Arcu
          risus quis varius quam quisque id diam vel. Nisl condimentum id
          venenatis a. Egestas integer eget aliquet nibh praesent. Consectetur
          lorem donec massa sapien faucibus. Lacus viverra vitae congue eu
          consequat. Porta nibh venenatis cras sed. Turpis pharetra convallis
          posuere morbi leo. Ut placerat orci nulla pellentesque dignissim.
          Ornare arcu dui vivamus arcu felis bibendum ut tristique. Non enim
          praesent elementum facilisis leo. Egestas erat imperdiet
        </h3>
      </div>

      <div className="image-container">
        <div className="astro">
          <motion.img
            initial={{ x: -400 }}
            animate={{ x: 0, transition: { duration: 0.6 } }}
            className="img-astro"
            src={images[0]}
            alt="astronaut"
          />
        </div>

        <canvas className="img-div"></canvas>

        <div className="jar">
          <motion.img
            initial={{ x: 400 }}
            animate={{ x: 0, transition: { duration: 0.6 } }}
            className="img-jar"
            src={images[1]}
            alt="space-jar"
          />
        </div>
      </div>

      <div className="live-sec-2">
        <h3 className="sec-2-h3">
          Sem fringilla ut morbi tincidunt. Eget aliquet nibh praesent tristique
          magna. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Erat
          pellentesque adipiscing commodo elit at. Turpis egestas maecenas
          pharetra convallis posuere morbi leo. Lorem mollis aliquam ut
          porttitor leo. Lorem ipsum dolor sit amet consectetur adipiscing elit
          pellentesque. Tempus urna et pharetra pharetra massa massa ultricies.
          Turpis cursus in hac habitasse platea dictumst quisque.
        </h3>
      </div>
      <FooterTab />
    </motion.div>
  )
}
