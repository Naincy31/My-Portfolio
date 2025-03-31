import travelPic from "../../src/assets/travel.jpg"
import childPic from "../../src/assets/childhood.jpg"
import cafePic from "../../src/assets/cafe.jpg"
import photographyPic from "../../src/assets/photography.jpg"
import workPic from "../../src/assets/work.jpg"
import myPic from "../../src/assets/naincy.png"
import cookingPic from "../../src/assets/cook.jpg"
import paintingPic from "../../src/assets/paint.jpg"
import { useEffect, useState } from "react";

const Overview = () => {

  return (
    <div className="overview px-24 py-8">
      <div className="flex py-5 gap-3 items-center">

        {/* Left Section */}
        <div className="left-section w-2/3 mx-16">
          <h1 className="text-4xl font-bold text-slate-200 text-opacity-75 mb-3">Hello, I'm </h1>
          <h4 className="text-5xl font-semibold text-slate-200 ">Naincy Rathore</h4>
          <p className="text-lg mt-5 text-white max-w-2xl whitespace-pre-wrap">
            A software developer based in Mumbai, India, 
            building seamless front-end and back-end solutions with a focus on efficiency. I love crafting smooth user experiences, writing clean code, 
            and solving real-world problems. 
            When I’m not coding, you’ll find me traveling, painting, cooking, or hopping between restos.
          </p>
        </div>

        {/* Right Section */}
        <div className="right-section w-1/3 mx-3 relative">
          <img src={myPic} alt="my pic" className="h-full object-cover w-full shadow-2xl shadow-slate-100 rounded-full" />

          {/* Circular Images Around the Right Section */}
          <div className={`images-container absolute inset-0 flex justify-center items-center animate-spin-slow`}>
            {[childPic, workPic, travelPic, paintingPic, cafePic, photographyPic, cookingPic].map((image, index) => (
              <div
                key={index}
                className={`absolute w-[100px] h-[100px] rounded-full border-4 border-white overflow-hidden flex-shrink-0 transition-transform duration-3000 ease-in-out`}
                style={{
                  transform: `rotate(${index * (360 / 7)}deg) translate(200px) rotate(-${index * (360 / 7)}deg)`,
                }}
              >
                <img
                  src={image}
                  className="w-auto h-auto object-cover"
                  alt={`Gallery-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    


  )
}

export default Overview