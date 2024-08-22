import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            vel, aliquid error minus omnis, quibusdam ratione repellat, tenetur
            iste animi doloremque assumenda quo quae ad alias odit sint nisi ab
            soluta ipsa in cum eius. Voluptatem, consequuntur sint. Reiciendis
            est dolore perferendis temporibus culpa esse doloremque aut sunt
            aperiam hic.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+91-9451493469</li>
            <li>contect@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Company 2024 @ Tomato.com - All Right Reserved
      </p>
    </div>
  );
}

export default Footer;
