import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { AiTwotoneLike } from 'react-icons/ai'
import { GrShareOption } from 'react-icons/gr'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import { BiArrowBack } from 'react-icons/bi'
import { useState, useEffect } from 'react';
import axios from 'axios'

const DetailDescription = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://node-backend-project-z8jx.onrender.com/api/category/home")
      .then((response) => setData(response.data))
      .catch((error) => console.log("Error", error))
  }, [])
  const history = useNavigate();
  var { id } = useParams();
  id = Number(id);
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <div className='detail-header'>
        <h1><span><BiArrowBack onClick={() => history(-1)} id='back' /></span><span id="header-the">THE</span><span id="header-siren">SIREN</span></h1>
      </div>
      <div className={isMobile ? "nav-links-mobile" : "nav2"} onClick={() => { setIsMobile(false) }}>
        <NavLink to="/" activeclassname="active" className="links">Home</NavLink>
        <NavLink to="/Bollywood" activeclassname="active" className="links">Bollywood</NavLink>
        <NavLink to="/Technology" activeclassname="active" className="links">Technology</NavLink>
        <NavLink to="/Hollywood" activeclassname="active" className="links">Hollywood</NavLink>
        <NavLink to="/Fitness" activeclassname="active" className="links">Fitness</NavLink>
        <NavLink to="/Food" activeclassname="active" className="links">Food</NavLink>
      </div>
      <button className='mobile-menu-icon' onClick={() => { setIsMobile(!isMobile) }}>
        {isMobile ? <RxCross2 /> : <GiHamburgerMenu />}
      </button>
      <div className='like-share'>
        <div className='like'>
          <AiTwotoneLike />
          <p>Like</p>
        </div>
        <div className='share'>
          <GrShareOption />
          <p>Share</p>
        </div>
      </div>
      <div className='detail-content'>
        {
          data.filter((item) => { return item.id === id }).map((element) => (
            <div>
              <div className='detail-title' key={element.id}>
                <h2>{element.DataTitle}</h2>
              </div>
              <div className='person'>
                <img src={element.avatar} alt="" className='avatar'></img>
                <div>
                  <p className='name'>{element.name}</p>
                  <p className='date'>{element.date}</p>
                </div>
                <div className='logos'>
                  <AiFillFacebook />
                  <AiFillTwitterSquare />
                  <AiFillInstagram />
                  <AiFillYoutube />
                </div>
              </div>
              <img src={element.DataImage} alt="" className='detail-content-img'></img>
              <div className='detail-para'>
                <p>{element.DataDetailDescription}</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className='down-like'>
        <AiTwotoneLike />
        <p>Like</p>
      </div>
      <hr className='detail-hr'></hr>
      {
        data.filter((item) => { return item.id === id }).map((element) => (
          <div className='person-2' key={element.id}>
            <img src={element.avatar} alt="" className='avatar'></img>
            <div>
              <p className='written'>&nbsp;&nbsp;WRITTEN BY</p>
              <p className='name'>{element.name}</p>
              <p className='date'>{element.date}</p>
            </div>
          </div>
        ))
      }
      <hr className='detail-hr'></hr>
      <div className='footer'>
        <h2>More from The Siren</h2>
        <hr className='footer-hr'></hr>
        <div className='footer-items'>
          <div className='more-1'>
            {
              data.filter((item) => { return item.id === 99 }).map((element) => (
                <div className='more1-data' key={element.id}>
                  <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <div className='more-avatar'>
                    <img src={element.avatar} alt=""></img>
                    <div>
                      <p className='name'>{element.name}</p>
                      <p className='more-date'>{element.date}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className='more-2'>
            {
              data.filter((item) => { return item.id === 100 }).map((element) => (
                <div className='more2-data' key={element.id}>
                  <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <div className='more-avatar'>
                    <img src={element.avatar} alt=""></img>
                    <div>
                      <p className='name'>{element.name}</p>
                      <p className='more-date'>{element.date}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className='more-3'>
            {
              data.filter((item) => { return item.id === 101 }).map((element) => (
                <div className='more3-data' key={element.id}>
                  <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <div className='more-avatar'>
                    <img src={element.avatar} alt=""></img>
                    <div>
                      <p className='name'>{element.name}</p>
                      <p className='more-date'>{element.date}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailDescription