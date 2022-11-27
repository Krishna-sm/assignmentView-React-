import React, { useEffect } from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

import Typed from "react-typed";

const App = () => {
  document.body.style.backgroundColor = "#3aafa9";
useEffect(()=>{
  document.title="Presentation"
})
  return (
    <div>
      <div
        className="container py-3 my-3"
        style={{ backgroundColor: "aliceblue" }}
      >
        <div className="py-5 m-2 pb-5 p-4 card-body shadow">
          <h1 className="text-center n9  fw-bold ">Topic - NetWork 🌐</h1>
          <hr
            className="text-center w-25 bg-dark m-auto"
            style={{ height: "5px", borderRadius: "20px" }}
          />
          <div className="py-4 h-100">
            {/* <div className='d-flex justify-content-center'> */}
            <img className="we d-flex m-auto" src="welcom.png" alt="img" />

            <h1 className="pt-4 text-center f1 ">
              <Typed
                strings={[
                  "Welcome",
                  'I am Krishna Bansal ',
                  " i Present My views On Network ",
                ]}
                typeSpeed={100}
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
        </div>
      </div>
    </div>
  );
};

export default App;
