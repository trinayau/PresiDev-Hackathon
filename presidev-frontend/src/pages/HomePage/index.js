import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import PureCounter from '@srexi/purecounterjs';

const HomePage = () => {

    // AOS Init:
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
        new PureCounter();
    }, []);

    const navigate = useNavigate();

    const handleLink = (link) => {
      navigate(link);
    };


    return ( 
        <>
        <section id="hero" className="hero">
        <div className="container position-relative">
        <div className="row gy-5" data-aos="fade-in">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
          <h2>Welcome to <span>Presidium Platform</span></h2>
          <p>Presidium Platform is a platform built for members of the Presidium Network. Add common items to your order, or request custom products delivered directly to you. Get in touch to request an account and find out how Presidium Network can help you.</p>
          <div class="d-flex justify-content-center justify-content-lg-start">
            <div class="btn-get-started" onClick={() => handleLink('/login')}
            >Get Started</div>
            <a href="#contact" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-telephone"></i><span>Contact Us</span></a>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2">
          <img src="assets/img/logistics.png" class="img-fluid" alt="globe with logistics" data-aos="zoom-out" data-aos-delay="100"/>
        </div>
      </div>
            </div>
            <div class="icon-boxes position-relative">
      <div class="container position-relative">
        <div class="row gy-4 mt-5">

          <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-globe-europe-africa"></i></div>
              <h4 class="title"><a href="" class="stretched-link">Coordination</a></h4>
              <p>Provide recommendation and coordination services to international stakeholders</p>
            </div>
          </div>
    
          <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-box2-heart"></i></div>
              <h4 class="title"><a href="" class="stretched-link">Supplies</a></h4>
              <p>Providing food and vital supplies to communities in crisis in Afghanistan and Ukraine</p>
            </div>

          </div>


          <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-geo-alt"></i></div>
              <h4 class="title"><a href="" class="stretched-link">Representation</a></h4>
              <p>Represent the needs of people affected by violence or poverty to international-policy makers</p>
            </div>
          </div>
 

          <div class="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-airplane-engines"></i></div>
              <h4 class="title"><a href="" class="stretched-link">Logistical Aid</a></h4>
              <p>Ensure that humanitarian aid and services reach vulnerable and displaced civilian populations</p>
            </div>
          </div>


        </div>
      </div>
    </div>       
        
        </section>
        <main>
        <section id="about" class="about">
        <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>About Us</h2>
          <p>Presidium Platform is developed and maintained by Team PresiDev for the Presidium Network in crisis zones.</p>
        </div>

        <div class="row gy-4">
          <div class="col-lg-6">
            <h3>Presidium Platform and Presidium Network</h3>
            <img src="https://images.unsplash.com/photo-1649621035719-1184ffc9b326?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="img-fluid rounded-4 mb-4" alt=""/>
            <p>The Presidium Network is a UK non-profit that provides support to communities in crisis to manage humanitarian issues and represent the needs of people affected by violence or poverty to international-policy makers.</p>
            <p>Our mission is to provide recommendation and coordination services to international stakeholders and advocacy for communities affected by conflict and widespread violence and/or violations of human rights to decelerate violence, and improve the respect for human rights.</p>
          </div>
          <div class="col-lg-6">
            <div class="content ps-0 ps-lg-5">
              <p class="fst-italic">
                The Presidium Platform aims to help the Presidium Network with:
              </p>
              <ul>
                <li><i class="bi bi-check-circle-fill"></i>
                Maintaining transparency and accountability to our partners and stakeholders across the supply chain
</li>
                <li><i class="bi bi-check-circle-fill"></i>Enhancing communication between end users and operational members</li>
                <li><i class="bi bi-check-circle-fill"></i> Making sure supplies and services are getting sent to the right people every time </li>
              </ul>
              <p>
                Find out more about the project and how you can help by watching our video:
              </p>

              <div class="position-relative mt-4">
                <img src="https://images.unsplash.com/photo-1635006304757-a02d75887177?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="img-fluid rounded-4" alt=""/>
                <a href="https://vimeo.com/635308356?embedded=true&source=video_title&owner=154786827" class="glightbox play-btn" target="_blank"></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section id="stats-counter" class="stats-counter">
      <div class="container" data-aos="fade-up">

        <div class="row gy-4 align-items-center">

          <div class="col-lg-6">
            <img src="assets/img/boxes.png" alt="" class="img-fluid"/>
          </div>

          <div class="col-lg-6">

            <div class="stats-item d-flex align-items-center">
              <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" class="purecounter"></span>
              <p><strong>Ukrainian Hospitals</strong> supplied with aid</p>
            </div>

            <div class="stats-item d-flex align-items-center">
              <span data-purecounter-start="0" data-purecounter-end="400" data-purecounter-duration="1" class="purecounter"></span>
              <p><strong>Tons</strong> of aid able to be delivered in Ukraine per day</p>
            </div>

            <div class="stats-item d-flex align-items-center">
              <span data-purecounter-start="0" data-purecounter-end="2000" data-purecounter-duration="1" class="purecounter"></span>
              <p><strong>Evacuations</strong> of Afghan nationals from the country</p>
            </div>

          </div>

        </div>

      </div>
    </section>
    <section id="call-to-action" class="call-to-action">
      <div class="container text-center" data-aos="zoom-out">
        <a href="https://www.fundsurfer.com/crowdfund/UkrainianAid" target="_blank"></a>
        <h3>Presidium Network Emergency Winter Medical Appeal
</h3>
        <p> Presidium Network and Presidium Ukraine (Our Ukraine registered Charity) have launched this winter appeal so we can get medical and needed supplies to vulnerable people in the East and South who are near the front lines before the harsh winter hits.</p>
        <p>
 We have a network of local and international volunteers, trucks and storage space in Poland, Romania and Ukraine we now need help raising funds for Urgent medical supplies. </p>
        <a class="cta-btn" href="https://www.fundsurfer.com/crowdfund/UkrainianAid">Donate Today</a>
      </div>
    </section>
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-header">
          <h2>Contact & Registration</h2>
 
          <p>
            To register for an account and start using the Presidium Platform, please contact us using the form below and we will get back to you as soon as possible.
          </p>
        </div>

        <div class="row gx-lg-0 gy-4">

          <div class="col-lg-4">

            <div class="info-container d-flex flex-column align-items-center justify-content-center">
              <div class="info-item d-flex">
                <i class="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Location:</h4>
                  <p>6 Painswick Heights
Yokehouse Lane
Stroud, England
GL6 7QS
</p>
                </div>
              </div>

              <div class="info-item d-flex">
                <i class="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p>info@presidiumnetwork.com</p>
                </div>
              </div>

              {/* <div class="info-item d-flex">
                <i class="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55</p>
                </div>
              </div> */}

              <div class="info-item d-flex">
                <i class="bi bi-clock flex-shrink-0"></i>
                <div>
                  <h4>Open Hours:</h4>
                  <p>Mon-Sat: 11AM - 23PM</p>
                </div>
              </div>
            </div>

          </div>

          <div class="col-lg-8">
            <form action="#" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="7" placeholder="Message" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>

      </div>
    </section>
        </main>
        </>
);
}
 
export default HomePage;
