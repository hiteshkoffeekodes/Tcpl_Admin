"use client";
import React from "react";
import dynamic from "next/dynamic";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
function Carsoul1() {
  const owlCarouselOptions = {
    loop: true,
    items: 1,
    center: true,
    nav: false,
    responsiveClass: true,
    // autoplay: true,
    // autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1200: {
        items: 1,
        nav: false,
        loop: true,
      },
    },
  };
  return (
    <div>
      <OwlCarousel className="owl-theme" {...owlCarouselOptions} loop nav>
        <div>
          <h1 className="text-[--darkblue] text-main-heading font-bold">
            Personal Verification
          </h1>
          <p className="text-[--darkblue] text-small font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            necessitatibus
            <br /> odio cumque nulla fuga! Magni!
          </p>
        </div>

        <div>
          <h1 className="text-[--darkblue] text-main-heading font-bold">
            Personal Verification Personal Verification
          </h1>
          <p className="text-[--darkblue] text-small font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            necessitatibus
            <br /> odio cumque nulla fuga! Magni!
          </p>
        </div>

        <div>
          <h1 className="text-[--darkblue] text-main-heading font-bold">
            Personal Verification
          </h1>
          <p className="text-[--darkblue] text-small font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            necessitatibus
            <br /> odio cumque nulla fuga! Magni!
          </p>
        </div>

        <div>
          <h1 className="text-[--darkblue] text-main-heading font-bold">
            Personal Verification
          </h1>
          <p className="text-[--darkblue] text-small font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
            necessitatibus
            <br /> odio cumque nulla fuga! Magni!
          </p>
        </div>
      </OwlCarousel>
    </div>
  );
}
export default Carsoul1;
