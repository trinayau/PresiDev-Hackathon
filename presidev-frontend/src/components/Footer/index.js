import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Footer = () => {

    return ( <footer id="footer" class="footer">

    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-info">
          <a href="index.html" class="logo d-flex align-items-center">
            <span>Presidium Platform</span>
          </a>
          <p>Presidium Platform for Presidium Network aims to serve volunteers and organisations in crisis zones around the world.</p>
          <div class="social-links d-flex mt-4">
            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><HashLink to="/">Home</HashLink></li>
            <li><HashLink to="/#about">About us</HashLink></li>
            <li><HashLink to="/#contact">Contact</HashLink></li>
            <li><HashLink to="/#contact">Register</HashLink></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>

        <div class="col-lg-2 col-6 footer-links">
          <h4>Our Services</h4>
          <ul>
            <li><a href="#">Advocate</a></li>
            <li><a href="#">Logistics</a></li>
            <li><a href="#">Volunteer</a></li>
            <li><a href="https://www.fundsurfer.com/crowdfund/UkrainianAid" target="_blank">Donation</a></li>
            <li><a href="#">Coordination</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
     
          <p>
          Presidium Network CIC <br/>
          Company number 13716487<br/>
          6 Painswick Heights<br/>
          Yokehouse Lane<br/>
          Stroud<br/>
          England, GL6 7QS<br/><br/>
            <strong>Email:</strong>  info@presidiumnetwork.com<br/>
          </p>
          

        </div>

      </div>
    </div>

    <div class="container mt-4">
      <div class="copyright">
        &copy; Copyright <strong><span>Presidium Network</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
       
        Built by <a href="https://github.com/trinayau/PresiDev-Hackathon" target="_blank" rel="noreferrer">Team PresiDev</a>
      </div>
    </div>

  </footer> );
}
 
export default Footer;
