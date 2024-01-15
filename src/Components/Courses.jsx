import React from 'react'
import './CSS/courses.css'

//Language Categories
import hindi from '../assets/courses/hindi.png';
import sanskrit from '../assets/courses/sanskrit.png';
import marathi from '../assets/courses/marathi.png';
import telugu from '../assets/courses/telugu.png';
import bengali from '../assets/courses/bengali.png';
import kashmiri from '../assets/courses/kashmiri.png';
import punjabi from '../assets/courses/punjabi.png';
import gujarati from '../assets/courses/gujarati.png';

//Tutor near
import card2 from '../assets/courses/card2.jpg';
import english from '../assets/courses/english.png';
import geometry  from '../assets/courses/geometry.png';
import coding from '../assets/courses/coding.png';
import science from '../assets/courses/science.png';
import reasoning from '../assets/courses/reasioning.png';
import drawing from '../assets/courses/drawing.png';
import reading from '../assets/courses/reading.png';

//Subjective Section
import history from '../assets/courses/history.png';
import card9 from '../assets/courses/card9.jpg';
import card10 from '../assets/courses/card10.jpg';
import card11 from '../assets/courses/card11.jpg';
import card13 from '../assets/courses/card13.jpg';
import card14 from '../assets/courses/card14.jpg';
import card15 from '../assets/courses/card15.jpg';
import card16 from '../assets/courses/card16.jpg';

const Courses = () => {
  return (
    <div className='courses'>
      <h2>Find the best tutors <br /> near you or online.</h2>
     
      <div className="language">
        <h1>Language Categories</h1>
        <div className="row">
          <div className="col">
            <div className="card4">
                <a href="/book">
                  <img
                    src={hindi}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>Hindi</p>
                  </a>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
            <div className="card4">
            <a href="/book">
                  <img
                    src={sanskrit}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>Sanskrit</p>
                  </a>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
            <div className="card4">
            <a href="/book">
                  <img
                    src={marathi}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>Marathi</p>
                  </a>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
            <div className="card4">
            <a href="/book">
                  <img
                    src={telugu}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>Telugu</p>
                  </a>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col">
            <div className="card4">
                <a href="/book">
                  <img
                    src={bengali}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>Bengali</p>
                  </a>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
            <div className="card4">
            <a href="/book">
                  <img
                    src={kashmiri}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>Kashmiri</p>
                  </a>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
            <div className="card4">
            <a href="/book">
                  <img
                    src={punjabi}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>Punjabi</p>
                  </a>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
            <div className="card4">
            <a href="/book">
                  <img
                    src={gujarati}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>Gujarati</p>
                  </a>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="forenlanguage">
        <div className="row">
          <div className="col">
              <div className="card5">
                <div className="ca1">
                <h3>Russian</h3>
                <a href="/book">
                  <h3>
                    Register now
                  </h3>
                </a>
                </div>
              </div>
              <div className="card5">
                <div className="ca2">
                <h3>Japanese</h3>
                <a href="/book">
                  <h3>
                    Register now
                  </h3>
                </a>
                </div>
              </div>
              <div className="card5">
                <div className="ca1">
                <h3>Korean</h3>
                <a href="/book">
                  <h3>
                    Register now
                  </h3>
                </a>
                </div>
              </div>
              <div className="card5">
                <div className="ca2">
                <h3>Martian</h3>
                <a href="/book">
                  <h3>
                    Register now
                  </h3>
                </a>
                </div>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
              <div className="card5">
                <div className="ca2">
                <h3>Chinese</h3>
                <a href="/book">
                  <h3>
                    Register now
                  </h3>
                </a>
                </div>
              </div>
              <div className="card5">
                <div className="ca1">
                <h3>French</h3>
                <a href="/book">
                  <h3>
                    Register now
                  </h3>
                </a>
                </div>
              </div>
              <div className="card5">
                <div className="ca2">
                <h3>Spanish</h3>
                <a href="/book">
                  <h3>
                    Register now
                  </h3>
                </a>
                </div>
              </div>
              <div className="card5">
                <div className="ca1">
                <h3>Latin</h3>
                <a href="/book">
                  <h3>
                    Register now
                  </h3>
                </a>
                </div>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
              <div className="card5">
                <div className="ca1">
                <h3>Greek</h3>
                <a href="/book">
                  <h3>
                    Register now
                  </h3>
                </a>
                </div>
              </div>
              <div className="card5">
                <div className="ca2">
                <h3>American Accent</h3>
                <a href="/book">
                  <h3>
                    Register now
                  </h3>
                </a>
                </div>
              </div>
              <div className="card5">
                <div className="ca1">
                <h3>British Accent</h3>
                <a href="/book">
                  <h3>
                    Register now
                  </h3>
                </a>
                </div>
              </div>
              <div className="card5">
                <div className="ca2">
                <h3>Nepali</h3>
                <a href="/book">
                  <h3>
                    Register now
                  </h3>
                </a>
                </div>
              </div>
          </div>
        </div>

      </div>
      
      <div className="language">
        <h1>Tutors near you</h1>
        <div className="row">
          <div className="col">
            <div className="card4">
                <a href="/book">
                  <img
                    src={english}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>English Tutors</p>
                  </a>
                  <h6>
                    4.8<i className="fa-solid fa-star"></i>(1.3k Reviews)
                  </h6>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
            <div className="card4">
            <a href="/book">
                  <img
                    src={card2}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>Communication Tutors</p>
                  </a>
                  <h6>
                    4.1<i className="fa-solid fa-star"></i>(2.2k Reviews)
                  </h6>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
            <div className="card4">
            <a href="/book">
                  <img
                    src={geometry}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>Geometry</p>
                  </a>
                  <h6>
                    4.2<i className="fa-solid fa-star"></i>(4.3k Reviews)
                  </h6>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
            <div className="card4">
            <a href="/book">
                  <img
                    src={coding}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>Coding Tutors</p>
                  </a>
                  <h6>
                    3.4<i className="fa-solid fa-star"></i>(1.1k Reviews)
                  </h6>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col">
            <div className="card4">
                <a href="/book">
                  <img
                    src={reading}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>Reading Tutors</p>
                  </a>
                  <h6>
                    4.8<i className="fa-solid fa-star"></i>(1.3k Reviews)
                  </h6>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
            <div className="card4">
            <a href="/book">
                  <img
                    src={science}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>Science Tutors</p>
                  </a>
                  <h6>
                    4.5<i className="fa-solid fa-star"></i>(1.3k Reviews)
                  </h6>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
            <div className="card4">
            <a href="/book">
                  <img
                    src={reasoning}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>Reasoning Tutors</p>
                  </a>
                  <h6>
                    4.7<i className="fa-solid fa-star"></i>(1.2k Reviews)
                  </h6>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
            <div className="card4">
            <a href="/book">
                  <img
                    src={drawing}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>Painting Tutors</p>
                  </a>
                  <h6>
                    4.0<i className="fa-solid fa-star"></i>(4.3k Reviews)
                  </h6>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="language">
        <h1>Subjective Section for Classes 5th-12th</h1>
        <div className="row">
          <div className="col">
            <div className="card4">
                <a href="/book">
                  <img
                    src={history}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>History</p>
                  </a>
                  <h6>
                    4.8<i className="fa-solid fa-star"></i>(1.3k Reviews)
                  </h6>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
            <div className="card4">
            <a href="/book">
                  <img
                    src={card9}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>Geography</p>
                  </a>
                  <h6>
                    4.1<i className="fa-solid fa-star"></i>(2.2k Reviews)
                  </h6>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
            <div className="card4">
            <a href="/book">
                  <img
                    src={card10}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>Social Studies</p>
                  </a>
                  <h6>
                    4.2<i className="fa-solid fa-star"></i>(4.3k Reviews)
                  </h6>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
            <div className="card4">
            <a href="/book">
                  <img
                    src={card11}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>Maths</p>
                  </a>
                  <h6>
                    3.4<i className="fa-solid fa-star"></i>(1.1k Reviews)
                  </h6>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col">
            <div className="card4">
                <a href="/book">
                  <img
                    src={card13}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>Physics</p>
                  </a>
                  <h6>
                    4.8<i className="fa-solid fa-star"></i>(1.3k Reviews)
                  </h6>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
            <div className="card4">
            <a href="/book">
                  <img
                    src={card14}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>Chemistry</p>
                  </a>
                  <h6>
                    4.5<i className="fa-solid fa-star"></i>(1.3k Reviews)
                  </h6>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
            <div className="card4">
            <a href="/book">
                  <img
                    src={card15}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>Biology</p>
                  </a>
                  <h6>
                    4.7<i className="fa-solid fa-star"></i>(1.2k Reviews)
                  </h6>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
            <div className="card4">
            <a href="/book">
                  <img
                    src={card16}
                    className="card-img-top"
                    alt="..."
                  />
                </a>
                <div className="cardbody">
                  <a href="/book">
                    <p>Algebra</p>
                  </a>
                  <h6>
                    4.0<i className="fa-solid fa-star"></i>(4.3k Reviews)
                  </h6>
                  <a href="/book">
                    <h6>
                      Register now
                    </h6>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Training">
         <div className="live">
          <h2>Training and live project </h2>
          <p>Practical industry-oriented projects in the training and live project section for hands-on experience. Additionally, <br /> provide personalized mentorship opportunities for students to ensure a holistic learning experience.</p>
          <h4>Enroll now for Courses</h4>
          <a href="/book">
            <button>Enroll Now</button>
          </a>
          <h4>Register Now for Training and live project</h4>
          <a href="/trainingform"><button>Register Now</button> </a>
          
         </div>
      </div>
    </div>
  )
}

export default Courses
