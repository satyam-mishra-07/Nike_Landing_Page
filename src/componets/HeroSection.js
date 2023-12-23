import React from "react";
import "../images/amazon.png";
import "../images/flipkart.png";
import "../images/hero-image.png";
import "../heroSection.css";

export default function HeroSection() {
  return (
    <>
      <div className="heroSection">
        <div className="heroContent">
          <div className="heroText">
            YOUR FEET DESERVE THE BEST
            <p className="description">
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
          </div>
          <div className="heroBtns">
            <button className="btn1">Shop Now</button>
            <button className="btn2">Catagories</button>
          </div>
          <div className="shop">
            ALSO AVAILABLE ON
            <div className="stores">
              <a
                target="blank"
                href="https://www.amazon.in/nike-shoes/s?k=nike+shoes"
              >
                <div id="amazon"></div>
              </a>
              <a
                target="_blank"
                href="https://www.flipkart.com/mens-footwear/nike~brand/pr?sid=osp,cil"
              >
                <div id="flipkart"></div>
              </a>
            </div>
          </div>
        </div>
        <div className="heroImg">
          <img src={require("../images/hero-image.png")} alt="" />
        </div>
      </div>
    </>
  );
}
