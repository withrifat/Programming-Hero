import React from 'react';
import { BsInstagram, BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us on</h2>
      <div className="">
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 justify-start join-item"> <FaFacebook></FaFacebook> Facebook</button>
          <button className="btn bg-base-100 justify-start join-item"> <BsTwitterX></BsTwitterX> Twitter</button>
          <button className="btn bg-base-100 justify-start join-item"> <BsInstagram></BsInstagram> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
