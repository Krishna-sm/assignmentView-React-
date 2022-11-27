import React from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import {IoHomeSharp} from 'react-icons/io5'

import Typed from "react-typed";

const App5 = () => {
  document.body.style.backgroundColor = "#3aafa9";
  return (
    <div>
      <div
        className="container py-3 my-3 mt-5"
        style={{ backgroundColor: "aliceblue" }}
      >
        <div className="py-5 m-2 pb-5 p-4 card-body shadow">
            <div className="d-flex m-auto justify-content-center">
                <img src="/than.png " className="w-25" alt="" />
            </div>
            <NavLink to={'/'} className="btn btn-outline-primary text-center m-auto bg mt-5">Go to Home Page  <IoHomeSharp className="mt-1 ml-3"/></NavLink>
        

            <div className="container d-flex justify-content-between">
              <NavLink
                to={"/faq"}
                className="btn btn-lg   btn-outline-danger px-4  "
              >
                <IoIosArrowRoundBack />
              </NavLink>
            </div>
        </div>
        
        {false &&<div className="py-5 m-2 pb-5 p-4 card-body shadow">
          <h1 className="text-center n9  fw-bold ">Topic - NetWork 🌐</h1>
          <hr
            className="text-center w-25 bg-dark m-auto"
            style={{ height: "5px", borderRadius: "20px" }}
          />
          <div className="py-4 h-100">
            {/* <div className='d-flex justify-content-center'> */}
            <img className="we d-flex m-auto" src="welcom.png" alt="img" />

            <h1 className="pt-4 text-center ">
              <Typed
                strings={[
                  "Welcome",
                  'I am <span className="f1">Krishna Bansal</span> ',
                  " i Present My views On Network ",
                ]}
                typeSpeed={90}
                loop
              />
            </h1>
            <div className="container d-flex justify-content-between">
              <NavLink
                to={"/"}
                className="btn btn-lg   btn-outline-danger px-4  "
              >
                <IoIosArrowRoundBack />
              </NavLink>
              <NavLink
                to={"/internet"}
                className="btn btn-lg   btn-outline-success px-4  "
              >
                <IoIosArrowRoundForward />
              </NavLink>
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default App5;
