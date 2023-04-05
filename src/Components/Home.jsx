import React from 'react'
import { Link } from 'react-router-dom'
import './Style/Home.css'

const Home = () => {
  return (
    <div className='content with-out'>
      <div className="header">
        <div className="latest">LATEST CONTENT</div>
      </div>
      <div className="home-content">

        <div className="content-list">

          <div className="HomeContentBlock">
            <Link to='/' className='content-block video'>
              <div className="thumbnail">
                <div className="background" style={{
                  backgroundImage: `url(${require("../assets/homeContentbk.jpg")})`
                }}>
                </div>
                <div className="duration">09:08</div>
              </div>
              <div className="description">
                <div className="content-type">VIDEO</div>
                <div className="title"> Deconstructed Drafts - Coach Special  | LEC Pop Quiz | 2023 Spring</div>
              </div>
            </Link>
          </div>
          <div className="HomeContentBlock">
            <Link to='/' className='content-block video'>
              <div className="thumbnail">
                <div className="background" style={{
                  backgroundImage: `url(${require("../assets/homeContentbk.jpg")})`
                }}>
                </div>
                <div className="duration">09:08</div>
              </div>
              <div className="description">
                <div className="content-type">VIDEO</div>
                <div className="title"> Deconstructed Drafts - Coach Special  | LEC Pop Quiz | 2023 Spring</div>
              </div>
            </Link>
          </div>

        </div>

        <div className="content-list">
          
          <div className="HomeContentBlock">
            <Link to='/' className='content-block video'>
            <div className="thumbnail">
                <div className="background" style={{
                  backgroundImage: `url(${require("../assets/homeContentbk2.jpg")})`
                }}>
                </div>
                <div className="duration">34:58</div>
              </div>
              <div className="description">
                <div className="content-type">VIDEO</div>
                <div className="title"> Full Day Highlights | W3 D3 | LEC Spring 2023 </div>
              </div>
            </Link>
          </div>
          <div className="HomeContentBlock">
            <Link to='/' className='content-block video'>
            <div className="thumbnail">
                <div className="background" style={{
                  backgroundImage: `url(${require("../assets/homeContentbk2.jpg")})`
                }}>
                </div>
                <div className="duration">34:58</div>
              </div>
              <div className="description">
                <div className="content-type">VIDEO</div>
                <div className="title"> Full Day Highlights | W3 D3 | LEC Spring 2023 </div>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home