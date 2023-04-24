import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] text-center font-bold">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text=[17px] max-w-3xl leading-[30px]"
      >
        Donec vitae diam malesuada, viverra dolor non, molestie ligula. Integer
        porta accumsan ante, quis ornare ex mollis sit amet. Nunc id sem nunc.
        Fusce in mauris sagittis, eleifend mi at, maximus felis. Donec feugiat
        dolor vel eros maximus, quis semper elit consequat. Aenean in odio
        cursus, volutpat mauris vel, posuere quam. Mauris et elementum est. Ut
        tristique orci lacus, quis tempus tellus pulvinar quis. Proin eget ipsum
        in orci ultricies porttitor non ut lacus. In congue, tortor quis
        convallis ultricies, nulla nisl sollicitudin orci, pellentesque gravida
        turpis augue ac nisl. Cras in laoreet sapien. Etiam a ante congue,
        facilisis ipsum et, semper arcu. Phasellus porttitor velit mi, nec
        ultricies nisi lobortis non. In pellentesque, orci id elementum
        consectetur, lorem nulla tristique justo, sed ultricies felis magna a
        sapien. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            title={service.title}
            icon={service.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
