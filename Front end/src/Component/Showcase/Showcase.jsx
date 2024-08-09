import React, {useEffect, useState} from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import "./Showcase.css"
import vision from "../../assets/vision1.png"
import mision from "../../assets/mission11.png"
import quality from "../../assets/quality4.png"

export default function Showcase() {
    useEffect(()=> {
        Aos.init({duration: 2000});
    })
  return (
    <>
        <div className="showcase-goals">
            <div className="vision" data-aos="fade-right">
                <img src={vision} alt="" />
                <h1> Vision</h1>
                <p>To foster a world where innovation and collaboration drive positive change.</p>
            </div>
            <div className="vision" data-aos="fade-right">
                <img src={mision} alt="" />
                <h1> Misson</h1>
                <p>To empower individuals and organizations with cutting-edge solutions and insights that transform challenges into opportunities.</p>
            </div>
            <div className="vision" data-aos="fade-right">
                <img src={quality} alt="" />
                <h1> Core Values</h1>
                <p> To be a leading catalyst for growth and progress, creating impactful solutions that inspire and elevate communities worldwide.</p>
            </div>
        </div>
    </>
  )
}
