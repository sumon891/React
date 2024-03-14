import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
//Props use hota hai apke components ko reusable banaane ke liya, consider karo aapke paas ek button hai and apko us button ko alag alag jagah daalna hai aap mein, to aap ek button component banaye and uska data hardcoded karne ke jagha parent component se send karde and child componenet par use kar le.

function Card({values, handleClick}) {
  const {name, image, profession, friends} = values;
  return (
  <div className="w-52 bg-white rounded-md overflow-hidden">
    <div className="w-full h-32 bg-sky-200">
      <img  className = 'w-full h-full object-cover' src={image} alt="" />
    </div>
      <div className="w-full p-3">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h5 className="text-xs">{profession}</h5>
        <button onClick={handleClick} className="px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md">{friends === true ? "Friends" : "Add friend"}</button>
      </div>
  </div>
  )
}

export default Card;
