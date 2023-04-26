import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Style/Home.css'
import { useState } from 'react'
// import {homeContent} from './constant'

const Home = () => {

  const [homeContent,setContent] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7091/api/News',{
    })
    .then(response => response.json())
    .then(json => setContent(json))
    }, []);


  // console.log(homeContent)
  const contentList = [];
  for(const item in homeContent){
    // console.log(homeContent[item]);
    const cItem = homeContent[item];
    // cItem['background'] = require(cItem['image']).default;
    contentList.push(
      <div key={cItem['title']} className="HomeContentBlock">
        <Link to='/' className='content-block video'>
          <div className="thumbnail">
            <div className="background" style={{
              backgroundImage: `url(${cItem['image']})`
            }}>
            </div>
            <div className="duration">{cItem['duration']}</div>
          </div>
          <div className="description">
            <div className="content-type">{cItem['type']}</div>
            <div className="title"> {cItem['title']}</div>
          </div>
        </Link>
      </div>
    )
  }

  const half = Math.ceil(contentList.length / 2);

  return (
    <div className='content with-out'>
      <div className="header">
        <div className="latest">LATEST CONTENT</div>
      </div>
      <div className="home-content">

        <div className="content-list">

          {contentList.slice(0,half)}
        </div>

        <div className="content-list">
          {contentList.slice(half)}
        </div>
      </div>
    </div>
  )
}

export default Home