import React, { useContext, useEffect, useRef, useState } from "react";
import "./Product.css"
import p1 from "../../assets/img24.jpg"
import p2 from "../../assets/Product/ACAST_Avcs/SDR.jpg"
export default function Product() {
    const generate = ()=>  {    
        ref.current.click();
    }
    const handleClick = (e) => {
             
        refClose.current.click();
      };
    const ref = useRef(null);
    const refClose = useRef(null);
  return (
    <>
    <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modwl
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Product Detail
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
             
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
               
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
               Back
              </button>
            </div>
          </div>
        </div>
      </div>
    <div className="product-showcase">
        <div className="heading">
            <h2>Products that we are Proud OF</h2>
        </div>
        <div className="prod">
            <div className="products" onClick={generate}>
                    <div class="product-card">
                    <img className='pimage' src={p2} alt="" />
                
                    <div class="textBox">
                        <h3 className='head'>Software Defined Radios</h3>
                    </div>
                    </div>
            </div>
            <div className="products" onClick={generate}>
                    <div class="product-card">
                    <img className='pimage' src={p1} alt="" />
                
                    <div class="textBox">
                        <h3 className='head'>Product  Name</h3>
                    </div>
                    </div>
            </div>
            <div className="products" onClick={generate}>
                    <div class="product-card">
                    <img className='pimage' src={p1} alt="" />
                
                    <div class="textBox">
                        <h3 className='head'>Product  Name</h3>
                    </div>
                    </div>
            </div>
            <div className="products" onClick={generate}>
                    <div class="product-card">
                    <img className='pimage' src={p1} alt="" />
                
                    <div class="textBox">
                        <h3 className='head'>Product  Name</h3>
                    </div>
                    </div>
            </div>
            <div className="products" onClick={generate}>
                    <div class="product-card">
                    <img className='pimage' src={p1} alt="" />
                
                    <div class="textBox">
                        <h3 className='head'>Product  Name</h3>
                    </div>
                    </div>
            </div>
            <div className="products" onClick={generate}>
                    <div class="product-card">
                    <img className='pimage' src={p1} alt="" />
                
                    <div class="textBox">
                        <h3 className='head'>Product  Name</h3>
                    </div>
                    </div>
            </div>
            <div className="products" onClick={generate}>
                    <div class="product-card">
                    <img className='pimage' src={p1} alt="" />
                
                    <div class="textBox">
                        <h3 className='head'>Product  Name</h3>
                    </div>
                    </div>
            </div>
            <div className="products" onClick={generate}>
                    <div class="product-card">
                    <img className='pimage' src={p1} alt="" />
                
                    <div class="textBox">
                        <h3 className='head'>Product  Name</h3>
                    </div>
                    </div>
            </div>
            <div className="products" onClick={generate}>
                    <div class="product-card">
                    <img className='pimage' src={p1} alt="" />
                
                    <div class="textBox">
                        <h3 className='head'>Product  Name</h3>
                    </div>
                    </div>
            </div>
            <div className="products" onClick={generate}>
                    <div class="product-card">
                    <img className='pimage' src={p1} alt="" />
                
                    <div class="textBox">
                        <h3 className='head'>Product  Name</h3>
                    </div>
                    </div>
            </div>
            <div className="products" onClick={generate}>
                    <div class="product-card">
                    <img className='pimage' src={p1} alt="" />
                
                    <div class="textBox">
                        <h3 className='head'>Product  Name</h3>
                    </div>
                    </div>
            </div>
            </div>
    </div>
    </>
  )
}
