import React, { useEffect } from 'react';
import AOS from 'aos';

const HomePage = () => {

    // AOS Init:
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);


    return ( 
        <>
        <section id="hero" className="hero">
        <div className="container position-relative">
        <div className="row gy-5" data-aos="fade-in">
        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
          <h2>Welcome to <span>Presidium Platform</span></h2>
          <p>Presidium Platform is a platform built for members of the Presidium Network. Add common items to your order, or request custom products delivered directly to you. Get in touch to request an account and find out how Presidium Network can help you.</p>
          <div class="d-flex justify-content-center justify-content-lg-start">
            <a href="#about" class="btn-get-started">Get Started</a>
            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-telephone"></i><span>Contact Us</span></a>
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
          <p>Presidium Platform is developed and maintained by Team PresiDev.</p>
        </div>

        <div class="row gy-4">
          <div class="col-lg-6">
            <h3>Voluptatem dignissimos provident quasi corporis</h3>
            <img src="assets/img/about.jpg" class="img-fluid rounded-4 mb-4" alt=""/>
            <p>Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis quod nisi et. Placeat debitis quia recusandae odit et consequatur voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.</p>
            <p>Temporibus nihil enim deserunt sed ea. Provident sit expedita aut cupiditate nihil vitae quo officia vel. Blanditiis eligendi possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut repellendus nobis tempore doloribus debitis explicabo similique sit. Accusantium sed ut omnis beatae neque deleniti repellendus.</p>
          </div>
          <div class="col-lg-6">
            <div class="content ps-0 ps-lg-5">
              <p class="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><i class="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li><i class="bi bi-check-circle-fill"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li><i class="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </p>

              <div class="position-relative mt-4">
                <img src="assets/img/about-2.jpg" class="img-fluid rounded-4" alt=""/>
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox play-btn"></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
        </main>
        </>
);
}
 
export default HomePage;
