import React, { useContext, useEffect, useRef, useState } from "react";
import "./Product.css"
import p1 from "../../assets/img24.jpg"
import sdrpdf from "../../assets/PDFs/SDR.pdf"
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
        <div className="modal-dialog ">
          <div className="modal-content detail-box">
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
            <div className="modal-body detail-box-1">
             <div className="modal-image">
              <img className="modal-image" src={p2} alt="" />
             </div>
             <div className="modal-info">
              <h3>Software Defined Radio</h3>
              <p>SDR plays a crucial role by providing airborne, maritime, and
              ground connectivity in the Joint and Combined Warfare context.
              It enables seamless coordination across all forces within the
              operational area, maintaining unmatched situational awareness.
              The SDR family of terminals, offered by ACAST & CTDL, is the pre-
              ferred choice for Pakistan and coalition forces due to its versatility
              across domains and high reliability.</p>
             </div>
            </div>
            <div className="modal-footer">
            
              <a
                download="downloaded_file.pdf"
                href={sdrpdf}
                type="button"
                className="btn btn-primary"
              >
              Details
              </a>
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    <div className="product-showcase">
        <div className="heading">
            <h2>Products that we are Proud OF</h2>
        </div>
        <div className="tabs">
             <button 
                type="button"
                className="btn btn-secondary mx-2 tabs-button active"
                data-bs-dismiss="modal"
                  
              >
                ACAST & AVC
              </button>
             <button 
                type="button"
                className="btn btn-secondary mx-1 tabs-button"
                data-bs-dismiss="modal"
              >
                BIZ UMT
              </button>
             <button 
                type="button"
                className="btn btn-secondary mx-1 tabs-button"
                data-bs-dismiss="modal"
              >
               NESDC
              </button>
             <button 
                type="button"
                className="btn btn-secondary mx-1 tabs-button"
                data-bs-dismiss="modal"
              >
               SETS
              </button>
             <button 
                type="button"
                className="btn btn-secondary mx-1 tabs-button"
                data-bs-dismiss="modal"
              >
               SCENSORS
              </button>
             <button 
                type="button"
                className="btn btn-secondary mx-1 tabs-button"
                data-bs-dismiss="modal"
              >
               EOIR
              </button>
             <button 
                type="button"
                className="btn btn-secondary mx-1 tabs-button"
                data-bs-dismiss="modal"
              >
               SIM DIV
              </button>

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
                        <h3 className='head'>Product1  Name</h3>
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
