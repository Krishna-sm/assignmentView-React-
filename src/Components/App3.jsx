import React from "react";
import { useEffect } from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function App3() {
  document.body.style.backgroundColor = "#3aafa9";
  useEffect(() => {
    document.title = "Networks";
  });
  return (
    <div
      className="container py-3 my-3"
      style={{ backgroundColor: "aliceblue" }}
    >
      <div className="py-5 m-2 pb-5 p-4 card-body shadow">
        <h1 className="text-center n9  fw-bold f1 ">What is  Intranet 🤔 </h1>

        <hr
          className="text-center w-25 bg-dark m-auto"
          style={{ height: "5px", borderRadius: "20px" }}
        />
        {/* contetn start */}
        <div className="container p-3">
        
          <div className="row">
            <div className="col-md-8">
            Intranet is defined as private network of computers within an organization with its own server and firewall. Moreover we can define Intranet as:

          <ul class="list-group list-group-flush">
  <li class="list-group-item">Intranet is a way to share confidential information within an Organization </li>
  <li class="list-group-item"> It is Private Network </li>
  <li class="list-group-item"> Only organization Member can access this network It is not for all </li>
  <li class="list-group-item"> It have Limited users </li>
  <li class="list-group-item"> Intranet is completely secured in comparision Internet is less secure </li>
  <li class="list-group-item">Intranet depend on Local Area Network </li>
  <li class="list-group-item">Intranet has some owner Because It is Private Network</li>
  <li class="list-group-item"></li>
</ul>

            </div>
            <div className="col-md-3">
              <div className="d-flex mt-5 justify-content-center align-items-center">
                {/* <img src="https://www.pngmart.com/files/16/Internet-Browser-PNG-Image.png" alt=""  className='w-75' /> */}
                <figure className="figure">
                  <img
                    src="https://static.javatpoint.com/computer/images/intranet.png"
                    className="figure-img img-fluid rounded"
                    alt="A generic square placeholder image with rounded corners in a figure."
                  />
                  <figcaption className="figure-caption text-center">
                  Intranet
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          


    

        </div>

        <h1 className="text-center n9  fw-bold f1 ">What is  Extranet 🤔 </h1>

<hr
  className="text-center w-25 bg-dark m-auto"
  style={{ height: "5px", borderRadius: "20px" }}
/>
{/* contetn start */}
<div className="container p-3">

  <div className="row">
    <div className="col-md-8">
    Similar to the intranet, the extranet is also a private network within an organization; however, it uses the internet to connect to outsiders in a controlled manner.

  <ul class="list-group list-group-flush">
<li class="list-group-item">Whereas Extranet is a tool for sharing information between the internal members and external members.  </li>
<li class="list-group-item"> Whereas Extranet is managed by many organizations.</li>
<li class="list-group-item"> While It is used to check status, access data, send mail, place order etc. </li>
<li class="list-group-item"> It is derived from Intranet. </li>

</ul>

    </div>
    <div className="col-md-3">
      <div className="d-flex mt-5 justify-content-center align-items-center">
        {/* <img src="https://www.pngmart.com/files/16/Internet-Browser-PNG-Image.png" alt=""  className='w-75' /> */}
        <figure className="figure">
          <img
            src="https://www.tutorialspoint.com/internet_technologies/images/internet-extranet.jpg"
            className="figure-img img-fluid rounded"
            alt="A generic square placeholder image with rounded corners in a figure."
          />
          <figcaption className="figure-caption text-center">
          Extranet
          </figcaption>
        </figure>
      </div>
    </div>
  </div>

  




</div>
        {/* <hr className=" text-center m-auto w- 75" /> */}
     
        {/* contetn End */}
        <div className="container d-flex justify-content-between">
          <NavLink to={"/Networks"} className="btn btn-lg   btn-outline-danger px-4  ">
            <IoIosArrowRoundBack />
          </NavLink>
          <NavLink
            to={"/faq"}
            className="btn btn-lg   btn-outline-success px-4  "
          >
            <IoIosArrowRoundForward />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
