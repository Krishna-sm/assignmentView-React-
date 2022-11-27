import React from "react";
import { useEffect } from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function App1() {
  document.body.style.backgroundColor = "#3aafa9";
  useEffect(() => {
    document.title = "Internet";
  });
  return (
    <div
      className="container py-3 my-3"
      style={{ backgroundColor: "aliceblue" }}
    >
      <div className="py-5 m-2 pb-5 p-4 card-body shadow">
        <h1 className="text-center n9  fw-bold f1 "> Internet 🌎 </h1>

        <hr
          className="text-center w-25 bg-dark m-auto"
          style={{ height: "5px", borderRadius: "20px" }}
        />
        {/* contetn start */}
        <div className="container p-3">
          <p className=" text-capitalize font-weight-normal p1">
            A global system of interconnected computers, using a standardised
            Internet Protocol suite for communication and sharing information is
            called the Internet.It is Used to access information over the web
          </p>
          <div className="row">
            <div className="col-md-8">
              <ul className="list-group list-group-flush">
                <li className="list-group-item c">
                  Internet is a world-wide global system of interconnected
                  computer networks.
                </li>

                <li className="list-group-item c">
                  Internet uses the standard Internet Protocol (TCP/IP).
                </li>

                <li className="list-group-item c">
                  Every computer in internet is identified by a unique IP
                  address.
                </li>

                <li className="list-group-item c">
                  A special computer DNS (Domain Name Server) is used to give
                  name to the IP Address so that user can locate a computer by a
                  name.
                </li>
                <li className="list-group-item c">
                  IP Address is a unique set of numbers (such as 110.22.33.114)
                  which identifies a computer location.
                </li>
                <li className="list-group-item c">
                  No one knows exactly how many computers are connected to the
                  internet.
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="d-flex mt-5 justify-content-center align-items-center">
                {/* <img src="https://www.pngmart.com/files/16/Internet-Browser-PNG-Image.png" alt=""  className='w-75' /> */}
                <figure className="figure">
                  <img
                    src="https://www.pngmart.com/files/16/Internet-Browser-PNG-Image.png"
                    className="figure-img img-fluid rounded"
                    alt="A generic square placeholder image with rounded corners in a figure."
                  />
                  <figcaption className="figure-caption text-center">
                    Internet Browser
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
        {/* <hr className=" text-center m-auto w- 75" /> */}
        <div className="container">
          <h1 className="text-center n9  fw-bold f1 ">
            {" "}
            Advantage 🤔 & DisAdvantage 😓{" "}
          </h1>

          <hr
            className="text-center w-25 bg-dark m-auto"
            style={{ height: "5px", borderRadius: "20px" }}
          />

          <div className="container p-4 ">
            <table class="table table-bordered p-3">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Advantage</th>
                  <th scope="col">Disadvantage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Instant access to almost any information</td>
                  <td>Increased risk of cyber-bullying</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td> Easy communication with friends and family</td>
                  <td>Risk of identity theft</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td> Building a digital identity</td>
                  <td>Increased level of screen-time</td>
                </tr>
                <tr>
                  <th>4</th>
                  <td> Stay in touch with friends from school and work</td>
                  <td>Increased risk of depression among teens</td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>Stay in touch with friends from school and work</td>
                  <td>Not Safe Place for Children,Money Fraud </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="container mb-4">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item mb-3">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
               <p className="text-center">
               <strong >What is the importance of the internet for e-commerce?
</strong>
               </p>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                    <ul>
                      
                      <li>eCommerce Helps You Reduce Your Costs</li>
                      <li>eCommerce Helps Businesses Go Global</li>
                      <li>eCommerce Can Be Done With Fewer Overheads & Fewer Risk</li>
                      <li>eCommerce Can Broaden Your Brand & Expand Your Business</li>
                      <li>I t is good for research and development</li>
                    </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item mb-3">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
               <p className="text-center">
               <strong > Categories of Network / Internet ? </strong>
               </p>
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <p className=" h5 mb-2">
                  One way to categorize the different types of computer network designs is by their scope or scale. 
                  <br />
                  </p>
                  Common examples of area network types are:
                    <ul className="font-weight-bold bold">
                      
                      <li>LAN - Local Area Network</li>
                      <li>PAN-Personal Area Network</li>
                      <li>WAN - Wide Area Network</li>
                      <li>MAN - Metropolitan Area Network</li>
                    </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        {/* contetn End */}
        <div className="container d-flex justify-content-between">
          <NavLink to={"/"} className="btn btn-lg   btn-outline-danger px-4  ">
            <IoIosArrowRoundBack />
          </NavLink>
          <NavLink
            to={"/categories"}
            className="btn btn-lg   btn-outline-success px-4  "
          >
            <IoIosArrowRoundForward />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
