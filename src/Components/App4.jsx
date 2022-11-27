import React, { useState } from "react";
import { useEffect } from "react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { NavLink } from "react-router-dom";

export default function App4() {
    const [cart,setCart]=useState(0);
  document.body.style.backgroundColor = "#3aafa9";
  useEffect(() => {
    document.title = "Faqs";
  });
  return (
    <div
      className="container py-3 my-3"
      style={{ backgroundColor: "aliceblue" }}
    >
      <div className="py-5 m-2 pb-5 p-4 card-body shadow">
        <h1 className="text-center n9  fw-bold f1 ">Some question 😁 </h1>

        <hr
          className="text-center w-25 bg-dark m-auto"
          style={{ height: "5px", borderRadius: "20px" }}
        />
        {/* contetn start */}
        <div className="container p-5">
       

        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is Url ? 😱
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        A URL is a type of uniform resource identifier and is address of a resource on the World Wide Web and the protocol used to access it. It is used to indicate the location of a web resource to access the web pages. 
        <br /> It is a Mixture of Protocol,domin,path and WebPage Name

       <div className="container mt-4">
       <img src="https://i.insider.com/601c27acee136f00183aa4f5?width=750&format=jpeg&auto=webp" alt="" className="w-100" />
       </div>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        What is Http and Https 🤯
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <strong>Http:</strong>
       <p>The http is a protocol that stands for Hypertext Transfer Protocol. It tells the browser to which protocol will be preferred to use for accessing the information that is specified in the domain.But it is not secured</p>
       <strong>Https:</strong>
       <p>Same as Http ,But it is  secured</p>
       <img src="https://ecomking.vn/wp-content/uploads/2021/07/http-vs-https-1.png" alt="" className="w-100" />
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      What is IP ? 😲
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      IP address stands for “Internet Protocol address.” The Internet Protocol is a set of rules for communication over the internet, such as sending mail, streaming video, or connecting to a website. An IP address identifies a network or device on the internet.
      <br />
      find Own IP Address = 
      <code>ipconfig/all</code>
      <img src="https://www.edureka.co/blog/content/ver.1553835393/uploads/2019/03/2019-03-29-15_05_03-Kali-Linux-2019.1-vm-amd64-VMware-Workstation.png" alt="" className="w-100" />      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreee" aria-expanded="false" aria-controls="collapseThree">
      Shopping Cart 🛍️
      </button>
    </h2>
    <div id="collapseThreee" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      A shopping cart is an essential part of a retailer's online store that streamlines the online shopping experience. 
      <br />
      A temporary record of items selected for eventual purchase from an online vendor's website
      <br />

           <div className="container p-5 d-flex justify-content-between">
           <div className="card" style={{width:"18rem"}}>
  <img src="https://pbs.twimg.com/media/EZQNEeOVAAA6c7V.jpg" className="card-img-top" alt="Babu Bhiya"/>
  <div className="card-body">
    <p className="card-text">Shopping Item</p>
    <button 
    onClick={()=>{setCart(cart+1)}}
    className="btn btn-secondary">Buy</button>
  </div>
</div>
           <p type="button" className="btn  position-relative">
  <AiOutlineShoppingCart/>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart}
    <span className="visually-hidden">unread messages</span>
  </span>
</p>
           </div>

      {/* <br />
      find Own IP Address = 
      <code>ipconfig/all</code>
      <img src="https://www.edureka.co/blog/content/ver.1553835393/uploads/2019/03/2019-03-29-15_05_03-Kali-Linux-2019.1-vm-amd64-VMware-Workstation.png" alt="" className="w-100" />      */}
       </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeee" aria-expanded="false" aria-controls="collapseThree">
      What is Cookies ? 🍪
      </button>
    </h2>
    <div id="collapseThreeee" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Cookies were created and designed to save user information so that a web server can deliver a web page tailored to the specific user. It allows form data to be maintained, and can improve the user experience by maintaining data from one visit to the next. Cookies are a very convenient way to maintain information from one session to the next, or even to carry information from one website to another.

     </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeeee" aria-expanded="false" aria-controls="collapseThree">
      What is eBay? 😪
      </button>
    </h2>
    <div id="collapseThreeeee" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      eBay is one of the most popular ways to buy and sell goods and services on the internet. It's a website where individuals and businesses can buy or sell new or second-hand items, from books and clothes to cars and holidays.

        <ul>
            <li>it is a e commerce Store </li>
            <li>visit : <a target={"_blank"} href="https://www.ebay.com/">ebay.com</a></li>
        </ul>

     </div>
    </div>
  </div>
</div>


    

        </div>

     
        <div className="container d-flex justify-content-between">
          <NavLink to={"/categories"} className="btn btn-lg   btn-outline-danger px-4  ">
            <IoIosArrowRoundBack />
          </NavLink>
          <NavLink
            to={"/thanku"}
            className="btn btn-lg   btn-outline-success px-4  "
          >
            <IoIosArrowRoundForward />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
