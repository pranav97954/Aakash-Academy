import React from 'react'
import './CSS/home.css'
import career from '../assets/Webinar-bro.png'

import speech from "../assets/home icons/speech.png";
import dance from "../assets/home icons/dance.png";
import developer from "../assets/home icons/developer.png";
import calculating from "../assets/home icons/calculating.png";
import meditation from "../assets/home icons/meditation.png";
import books from "../assets/home icons/books.png";
import conversation from "../assets/home icons/conversation.png";
import livemusic from "../assets/home icons/live-music.png";

//service img
import transport from '../assets/home icons/transport.png'
import hotel from '../assets/home icons/hotel.png'
import labs from '../assets/home icons/labs.png'
import restaurant from '../assets/home icons/restaurant.png'

//Extra Activity
import digital from '../assets/home/digital.png'
import ethical from '../assets/home/ethical.png'
import webdevelopment from '../assets/home/webdevlopment.png'
import graphic from '../assets/home/graphic.png'
import aiml from '../assets/home/aiml.png'
import seo from '../assets/home/seo.png'
import cybersecurity from '../assets/home/cybersecurity.png'
import datascience from '../assets/home/datascience.png'
import blockchain from '../assets/home/blockchain.png'

//on demand skills
import Affiliate from '../assets/home/affiliate.png'
import lead from '../assets/home/lead.png'
import digitalart from '../assets/home/digitalart.png'
import aiimage from '../assets/home/aiimage.png'
import blogging from '../assets/home/blogging.png'
import youtube from '../assets/home/youtube.png'

//Popular event
import event1 from "../assets/events/event1.jpg";
import sportsday from "../assets/events/sports-day.jpg";
import holi from "../assets/events/holi.jpg";
import diwali from "../assets/events/diwali.jpg";
import tour from "../assets/events/tour.jpg";
import debate from "../assets/events/debate.jpg";

// import from '../assets/home/'
const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="conslider">
          <div className="slidercontent">
            <h3 className="anim">Your Career,<br /> Our Everlasting Commitment to Your Growth</h3>
            <p className="anim">Explore a world of learning at our educational hub, where we offer a diverse range of courses coupled with hands-on live project training. Our commitment extends beyond education as we provide dedicated support to ensure your successful placement in the professional landscape. Join us on the journey to shape your career with expertise and guidance.</p>
            <button className="anim">Join Now</button>
          </div>
          <img src={career} className="featureimg anim" />
        </div>
        

        <div className="container_top">
        <div className="Exams">
          <h3>Top Categories</h3>
          <div className="row">
            <div className="cp">
              <a href="/personalvideoview">
                <img
                  style={{ width: "auto", height: "3rem" }}
                  className="img-fluid mb-1"
                  src={speech}
                  alt=""
                />
              </a>
              <a href="/personalvideoview">
                <p>Personal development</p>
              </a>
            </div>
            <div className="cp cc">
              <a href="/classical">
                <img
                  style={{ width: "auto", height: "3rem" }}
                  className="img-fluid mb-1"
                  src={dance}
                  alt=""
                />
              </a>
              <a href="/classical">
                <p>Classical Dance</p>
              </a>
            </div>
            <div className="cp">
              <a href="/itview">
                <img
                  style={{ width: "auto", height: "3rem" }}
                  className="img-fluid mb-1"
                  src={developer}
                  alt=""
                />
              </a>
              <a href="/itview">
                <p>IT Education</p>
              </a>
            </div>
            <div className="cp cc">
              <a href="/mathvideoview">
                <img
                  style={{ width: "auto", height: "3rem" }}
                  className="img-fluid mb-1"
                  src={calculating}
                  alt=""
                />
              </a>
              <a href="/mathvideoview">
                <p>Vedic Maths</p>
              </a>
            </div>
          </div>

          <div className="row">
            <div className="cp cc">
              <a href="/yogaview">
                <img
                  style={{ width: "auto", height: "3rem" }}
                  className="img-fluid mb-1"
                  src={meditation}
                  alt=""
                />
              </a>
              <a href="/yogaview">
                <p>Yoga</p>
              </a>
            </div>
            <div className="cp">
              <a href="/religiousview">
                <img
                  style={{ width: "auto", height: "3rem" }}
                  className="img-fluid mb-1"
                  src={books}
                  alt=""
                />
              </a>
              <a href="/religiousview">
                <p>Religious Education</p>
              </a>
            </div>
            <div className="cp cc">
              <a href="/englishvideoview">
                <img
                  style={{ width: "auto", height: "3rem" }}
                  className="img-fluid mb-1"
                  src={conversation}
                  alt=""
                />
              </a>
              <a href="/englishvideoview">
                <p>Communication Skills</p>
              </a>
            </div>
            <div className="cp">
              <a href="/musicview">
                <img
                  style={{ width: "auto", height: "3rem" }}
                  className="img-fluid mb-1"
                  src={livemusic}
                  alt=""
                />
              </a>
              <a href="/musicview">
                <p>Music Lessons</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="cont1">
          <div className="row">
            <div className="head">
              <h2>SERVICES OFFERS</h2>
              <p>
                We specialize in Educational services tailored to meet your
                digital needs and <br className="d-none d-lg-block" /> Our team
                excels .
              </p>
            </div>
            <div className="col">
              <div className="card">
                <div>
                  <img src={transport} alt="BUS" />
                </div>
                <h5 className="cardhead">Transport</h5>
                <p>
                  The academy has Provide Transport Facility with GPS live
                  Location tracking and it have the Advance Mobile Notification
                  at.{" "}
                </p>
              </div>
              <div className="card">
                <div>
                  <img src={hotel} alt="Hostel" />
                </div>
                <h5 className="cardhead">Hostel Facilities</h5>
                <p>
                  here are 110 rooms in hostel that can provide hostel facility
                  to the 350 boy’s & 200 girl’s ,Girl’s & boy’s hostel are
                  separated.
                </p>
              </div>
              <div className="card">
                <div>
                  <img src={restaurant} alt="Canteen" />
                </div>
                <h5 className="cardhead">Canteen & meals</h5>
                <p>
                  Under the care and supervision of the administrator & food in
                  charge proper functioning of the dining hall of very high
                  standards.
                </p>
              </div>
              <div className="card">
                <div>
                  <img src={labs} alt="Labs" />
                </div>
                <h5 className="cardhead">Labs Facilities</h5>
                <p>
                  We Provide the Computer lab, 3D lab, Physics, Chemistry,
                  Biology and General Science and specially Artificial
                  intelligence lab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="extraactivity">
        <h1>Extra Activities</h1>
        <div className="row">
          <div className="col">
            <div className="card">
              <img src={cybersecurity} alt="" />
              <h3>Digital Marketing</h3>
              <a href="/registernow"><button>Register Now</button></a>
            </div>
            <div className="card">
              <img src={digital} alt="" />
              <h3>Ethical Hacking</h3>
              <a href="/registernow"><button>Register Now</button></a>
            </div>
            <div className="card">
            <img src={webdevelopment} alt="" />
              <h3>Web Development</h3>
              <a href="/registernow"><button>Register Now</button></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <img src={graphic} alt="" />
              <h3>Graphic Design</h3>
              <a href="/registernow"><button>Register Now</button></a>
            </div>
            <div className="card">
              <img src={aiml} alt="" />
              <h3>AI & ML</h3>
              <a href="/registernow"><button>Register Now</button></a>
            </div>
            <div className="card">
              <img src={seo} alt="" />
              <h3>SEO Settings</h3>
              <a href="/registernow"><button>Register Now</button></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <img src={cybersecurity} alt="" />
              <h3>Cyber Security</h3>
              <a href="/registernow"><button>Register Now</button></a>
            </div>
            <div className="card">
              <img src={datascience} alt="" />
              <h3>Data Science</h3>
              <a href="/registernow"><button>Register Now</button></a>
            </div>
            <div className="card">
              <img src={blockchain} alt="" />
              <h3>Blockchain</h3>
              <a href="/registernow"><button>Register Now</button></a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="extraactivity">
        <h1>On-Demand Skills</h1>
        <div className="row">
          <div className="col">
            <div className="card">
              <img src={Affiliate} alt="" />
              <h3>Affiliate market.</h3>
              <a href="/registernow"><button>Register Now</button></a>
            </div>
            <div className="card">
              <img src={lead} alt="" />
              <h3>Lead Generation</h3>
              <a href="/registernow"><button>Register Now</button></a>
            </div>
            <div className="card">
            <img src={digitalart} alt="" />
              <h3>Digital Art</h3>
              <a href="/registernow"><button>Register Now</button></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <img src={aiimage} alt="" />
              <h3>Ai-image Creation</h3>
              <a href="/registernow"><button>Register Now</button></a>
            </div>
            <div className="card">
              <img src={blogging} alt="" />
              <h3>Blogging</h3>
              <a href="/registernow"><button>Register Now</button></a>
            </div>
            <div className="card">
              <img src={youtube} alt="" />
              <h3 className='special1'>YouTube video-creation</h3>
              <a href="/registernow"><button>Register Now</button></a>
            </div>
          </div>
        </div>
      </div>


      <div className="extraactivity">
        <h1>Popular Events</h1>
        <div className="row">
          <div className="col">
            <div className="card2">
              <img src={event1} alt="" />
              <h3>Tree Plantation</h3>
              <button>View more</button>
            </div>
            <div className="card2">
              <img src={sportsday} alt="" />
              <h3>Sports Day Game</h3>
              <button>View more</button></div>
            <div className="card2">
            <img src={holi} alt="" />
              <h3>Holi Celebration</h3>
              <button>View more</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card2">
              <img src={diwali} alt="" />
              <h3>Diwali Celebration</h3>
              <button>View more</button>
            </div>
            <div className="card2">
              <img src={tour} alt="" />
              <h3>Tour Camping</h3>
              <button>View more</button>
            </div>
            <div className="card2">
              <img src={debate} alt="" />
              <h3>Debate competition</h3>
              <button>View more</button>
            </div>
          </div>
        </div>
      </div>

     </div>      
    </div>
  )
}

export default Home
