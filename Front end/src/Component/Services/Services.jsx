import React, {useEffect, useState} from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import "./Services.css"
import service1 from "../../assets/ethics21.jpg"
import service2 from "../../assets/cor_esteem.jpg"
import service3 from "../../assets/excel.jpg"
export default function Services() {
    useEffect(()=> {
        Aos.init({duration: 900});
    })
  return (
   <>
    <div className="services">
        <div className="service-heading" data-aos="fade-up">
            <h3>Domains</h3>
            <h1>Our Valuable Domains</h1>
        </div>
        <div className="services-showcase">
             
        <div className="card w-18 ser" data-aos="fade-up">
        <img src={service3} className="card-img-top ser-image" alt="..."/>
        <div className="card-body ser-body">
            <h5 className="card-title">ACAST & AVCS DIVISION</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <ul className='ser-list'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto </li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto </li>
            </ul>
        </div>
        </div>
       
        <div className="card w-18 ser"  data-aos="fade-up">
        <img src={service1} className="card-img-top ser-image" alt="..."/>
        <div className="card-body ser-body">
            <h5 className="card-title">BIZ UMT</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <ul className='ser-list'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto </li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto </li>
            </ul>
        </div>
        </div>
        <div className="card w-18 ser" data-aos="fade-up">
        <img src={service2} className="card-img-top ser-image" alt="..."/>
        <div className="card-body ser-body">
            <h5 className="card-title">SENSORS DIVISON</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <ul className='ser-list'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto </li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto </li>
            </ul>
        </div>
        </div>
        <div className="card w-18 ser" data-aos="fade-up">
        <img src={service3} className="card-img-top ser-image" alt="..."/>
        <div className="card-body ser-body">
            <h5 className="card-title">EO / IR DIVISION</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <ul className='ser-list'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto </li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto </li>
            </ul>
        </div>
        </div>
        <div className="card w-18 ser" data-aos="fade-up">
        <img src={service3} className="card-img-top ser-image" alt="..."/>
        <div className="card-body ser-body">
            <h5 className="card-title">School Of Emerging Technologies</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <ul className='ser-list'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto </li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto </li>
            </ul>
        </div>
        </div>
        <div className="card w-18 ser" data-aos="fade-up">
        <img src={service3} className="card-img-top ser-image" alt="..."/>
        <div className="card-body ser-body">
            <h5 className="card-title">NESDC</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <ul className='ser-list'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto </li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto </li>
            </ul>
        </div>
        </div>
        <div className="card w-18 ser" data-aos="fade-up">
        <img src={service3} className="card-img-top ser-image" alt="..."/>
        <div className="card-body ser-body">
            <h5 className="card-title">Simulation DIVISION</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <ul className='ser-list'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto </li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto </li>
            </ul>
        </div>
        </div>



        </div>
    </div>
   </>
  )
}
