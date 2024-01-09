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


      </div>

      
    </div>
  )
}

export default Home
