import React from "react";
import { useEffect } from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function App2() {
  document.body.style.backgroundColor = "#3aafa9";
  useEffect(() => {
    document.title = "Category Of Network";
  });
  return (
    <div
      className="container py-3 my-3"
      style={{ backgroundColor: "aliceblue" }}
    >
      <div className="py-5 m-2 pb-5 p-4 card-body shadow">
        <h1 className="text-center n9  fw-bold f1 "> Categories of Network 😲 </h1>

        <hr
          className="text-center w-25 bg-dark m-auto"
          style={{ height: "5px", borderRadius: "20px" }}
        />
        {/* contetn start */}
        <div className="container p-3">
        
          <div className="row">
            <div className="col-md-8">
              <h1>Local Area Network</h1>
             
A LAN connects network devices over a relatively short distance. A networked office building, school, or home usually contains a single LAN, though sometimes one building will contain a few small LANs (perhaps one per room), and occasionally a LAN will span a group of nearby buildings.

            </div>
            <div className="col-md-3">
              <div className="d-flex mt-5 justify-content-center align-items-center">
                {/* <img src="https://www.pngmart.com/files/16/Internet-Browser-PNG-Image.png" alt=""  className='w-75' /> */}
                <figure className="figure">
                  <img
                    src="https://www.cloudflare.com/resources/images/slt3lc6tev37/78rJr5URxwDD9uyxKNpsiJ/d220f31e4b59c89290f04eed689ab5bb/what_is_LAN_diagram.png"
                    className="figure-img img-fluid rounded"
                    alt="A generic square placeholder image with rounded corners in a figure."
                  />
                  <figcaption className="figure-caption text-center">
                  LAN - Local Area Network
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-md-8">
              <h1>Personal area network</h1>
             
              A personal area network (PAN) is the smallest and simplest type of network. PANs connect devices within the range of an individual and are no larger than about 10 meters (m). Because PANs operate in such limited areas of space, most are wireless and provide short-range connectivity with infrared technology.
              <br /> <strong>Examples :Wireless Headset Connect with smartPhone and laptop  </strong>
. 

            </div>
            <div className="col-md-3">
              <div className="d-flex mt-5 justify-content-center align-items-center">
                {/* <img src="https://www.pngmart.com/files/16/Internet-Browser-PNG-Image.png" alt=""  className='w-75' /> */}
                <figure className="figure">
                  <img
                    src="https://www.gitech.co.ke/Images/personal-area-network.png"
                    className="figure-img img-fluid rounded"
                    alt="A generic square placeholder image with rounded corners in a figure."
                  />
                  <figcaption className="figure-caption text-center">
                  PAN - Personal Area Network
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-md-8">
              <h1>Wide area network</h1>
             
              A wide area network (WAN) is the most expansive type of computer network configuration. 
              <br /> <span>For example, an organization with a corporate office in New York can connect a branch location in London in the same WAN. Users in both locations obtain access to the same data, files and applications, and can communicate with each other. </span>
. 

            </div>
            <div className="col-md-3">
              <div className="d-flex mt-5 justify-content-center align-items-center">
                {/* <img src="https://www.pngmart.com/files/16/Internet-Browser-PNG-Image.png" alt=""  className='w-75' /> */}
                <figure className="figure">
                  <img
                    src="https://www.cspsprotocol.com/wp-content/uploads/2021/05/What-is-WAN.png"
                    className="figure-img img-fluid rounded"
                    alt="A generic square placeholder image with rounded corners in a figure."
                  />
                  <figcaption className="figure-caption text-center">
                  WAN - Wild Area Network
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8">
              <h1>Metropolitan Area Network</h1>
             
              <p>The Metropolitan Area Network (MAN) generally expands throughout a city such as cable TV network. </p>


            </div>
            <div className="col-md-3">
              <div className="d-flex mt-5 justify-content-center align-items-center">
                {/* <img src="https://www.pngmart.com/files/16/Internet-Browser-PNG-Image.png" alt=""  className='w-75' /> */}
                <figure className="figure">
                  <img
                    src="https://lh3.googleusercontent.com/NalTVO-xUNbepJOL4lZiz22JvfYgNE7ik9gkonkIeL-vpbvZVN5iXo2NGDF0eK0hu-6uaYFyTYyTVmO3y_qcsdPAEuYdgzHKwGtpqwF-kUL-qxmiG7-MBb0yDqEW4iCGprKrzgRB"
                    className="figure-img img-fluid rounded"
                    alt="A generic square placeholder image with rounded corners in a figure."
                  />
                  <figcaption className="figure-caption text-center">
                  WAN - Wild Area Network
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>



        </div>
        {/* <hr className=" text-center m-auto w- 75" /> */}
     
        {/* contetn End */}
        <div className="container d-flex justify-content-between">
          <NavLink to={"/internet"} className="btn btn-lg   btn-outline-danger px-4  ">
            <IoIosArrowRoundBack />
          </NavLink>
          <NavLink
            to={"/Networks"}
            className="btn btn-lg   btn-outline-success px-4  "
          >
            <IoIosArrowRoundForward />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
