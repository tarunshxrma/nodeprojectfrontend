import React from 'react'
import Navbar from './Navbar'
import "./Components.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://node-backend-project-z8jx.onrender.com/api/category/home")
      .then((response) => setData(response.data))
      .catch((error) => console.log("Error", error))
  }, [])
  return (
    <>
      <Navbar /><br></br>
      <div className='home-image-container'>
        {
          data.filter((item) => { return item.category === "Home" && item.id === 1 }).map((element) => (
            <div id='bollywood-image' key={element.id}>
              <img src={element.image1} alt=""></img>
            </div>
          ))
        }
        <div>
          {
            data.filter((item) => { return item.category === "Home" && item.id === 97 }).map((element) => (
              <div id='tech-image' key={element.id}>
                <img src={element.image2} alt=""></img>
              </div>
            ))
          }
          {
            data.filter((item) => { return item.category === "Home" && item.id === 98 }).map((element) => (
              <div id='hollywood-image' key={element.id}>
                <img src={element.image3} alt=""></img>
              </div>
            ))
          }
        </div>
      </div>
      <div className='latest-stories'>
        <h2>The Latest <hr className="hr-under2"></hr></h2>
      </div>
      <div className='home-latest'>
        <div>
          {
            data.filter((item) => { return item.category === "bollywood" && item.id === 2 }).map((element) => (
              <div className='latest1' key={element.id}>
                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                <p>{element.DataDescription}</p>
              </div>
            ))
          }
        </div>
        <div>
          {
            data.filter((item) => { return item.category === "technology" && item.id === 22 }).map((element) => (
              <div className='latest2' key={element.id}>
                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                <p>{element.DataDescription}</p>
              </div>
            ))
          }
        </div>
        <div>
          {
            data.filter((item) => { return item.category === "hollywood" && item.id === 40 }).map((element) => (
              <div className='latest3' key={element.id}>
                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                <p>{element.DataDescription}</p>
              </div>
            ))
          }
        </div>
        <div>
          {
            data.filter((item) => { return item.category === "fitness" && item.id === 59 }).map((element) => (
              <div className='latest4' key={element.id}>
                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                <p>{element.DataDescription}</p>
              </div>
            ))
          }
        </div>
        <div>
          {
            data.filter((item) => { return item.category === "food" && item.id === 78 }).map((element) => (
              <div className='latest5' key={element.id}>
                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                <p>{element.DataDescription}</p>
              </div>
            ))
          }
        </div>
        <div>
          {
            data.filter((item) => { return item.category === "technology" && item.id === 23 }).map((element) => (
              <div className='latest6' key={element.id}>
                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                <p>{element.DataDescription}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className='top-stories'>
        <h2>Top Stories <hr className="hr-under2"></hr></h2>
      </div>
      <div className='data-container'>
        <div className='home-data'>
          {
            data.filter((item) => { return item.category === "bollywood" && item.id === 5 }).map((element) => (
              <div className='data1' key={element.id}>
                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                <div className='data-description'>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <p>{element.DataDescription}</p>
                </div>
              </div>
            ))
          }
          <hr></hr>
          {
            data.filter((item) => { return item.category === "hollywood" && item.id === 44 }).map((element) => (
              <div className='data2' key={element.id}>
                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                <div className='data-description'>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <p>{element.DataDescription}</p>
                </div>
              </div>
            ))
          }
          <hr></hr>
          {
            data.filter((item) => { return item.category === "technology" && item.id === 26 }).map((element) => (
              <div className='data3' key={element.id}>
                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                <div className='data-description'>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <p>{element.DataDescription}</p>
                </div>
              </div>
            ))
          }
          <hr></hr>
          {
            data.filter((item) => { return item.category === "fitness" && item.id === 65 }).map((element) => (
              <div className='data4' key={element.id}>
                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                <div className='data-description'>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <p>{element.DataDescription}</p>
                </div>
              </div>
            ))
          }
          <hr></hr>
          {
            data.filter((item) => { return item.category === "technology" && item.id === 28 }).map((element) => (
              <div className='data5' key={element.id}>
                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                <div className='data-description'>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <p>{element.DataDescription}</p>
                </div>
              </div>
            ))
          }
          <hr></hr>
          {
            data.filter((item) => { return item.category === "bollywood" && item.id === 10 }).map((element) => (
              <div className='data6' key={element.id}>
                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                <div className='data-description'>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <p>{element.DataDescription}</p>
                </div>
              </div>
            ))
          }
          <hr></hr>
          {
            data.filter((item) => { return item.category === "fitness" && item.id === 68 }).map((element) => (
              <div className='data7' key={element.id}>
                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                <div className='data-description'>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <p>{element.DataDescription}</p>
                </div>
              </div>
            ))
          }
          <hr></hr>
          {
            data.filter((item) => { return item.category === "food" && item.id === 88 }).map((element) => (
              <div className='data8' key={element.id}>
                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                <div className='data-description'>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <p>{element.DataDescription}</p>
                </div>
              </div>
            ))
          }
          <hr></hr>
          {
            data.filter((item) => { return item.category === "hollywood" && item.id === 51 }).map((element) => (
              <div className='data9' key={element.id}>
                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                <div className='data-description'>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <p>{element.DataDescription}</p>
                </div>
              </div>
            ))
          }
          <hr></hr>
          {
            data.filter((item) => { return item.category === "technology" && item.id === 33 }).map((element) => (
              <div className='data10' key={element.id}>
                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                <div className='data-description'>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <p>{element.DataDescription}</p>
                </div>
              </div>
            ))
          }
          <hr></hr>
          {
            data.filter((item) => { return item.category === "hollywood" && item.id === 53 }).map((element) => (
              <div className='data11' key={element.id}>
                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                <div className='data-description'>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <p>{element.DataDescription}</p>
                </div>
              </div>
            ))
          }
          <hr></hr>
          {
            data.filter((item) => { return item.category === "fitness" && item.id === 72 }).map((element) => (
              <div className='data12' key={element.id}>
                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                <div className='data-description'>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <p>{element.DataDescription}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className='top-posts-container'>
          <div className='top-posts'>
            <div className='home-top-posts-heading'><h2>Top Posts <hr className="hr-under3"></hr></h2></div>
            {
              data.filter((item) => { return item.category === "bollywood" && item.id === 17 }).map((element) => (
                <div className='top-post1' key={element.id}>
                  <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <h1>1</h1>
                </div>
              ))
            }
            <hr></hr>
            {
              data.filter((item) => { return item.category === "technology" && item.id === 37 }).map((element) => (
                <div className='top-post2' key={element.id}>
                  <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <h1>2</h1>
                </div>
              ))
            }
            <hr></hr>
            {
              data.filter((item) => { return item.category === "hollywood" && item.id === 58 }).map((element) => (
                <div className='top-post3' key={element.id}>
                  <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <h1>3</h1>
                </div>
              ))
            }
            <hr></hr>
            {
              data.filter((item) => { return item.category === "fitness" && item.id === 74 }).map((element) => (
                <div className='top-post4' key={element.id}>
                  <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <h1>4</h1>
                </div>
              ))
            }
            <hr></hr>
            {
              data.filter((item) => { return item.category === "food" && item.id === 96 }).map((element) => (
                <div className='top-post5' key={element.id}>
                  <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <h1>5</h1>
                </div>
              ))
            }
            <hr></hr>
          </div>
          <div className='home-advertisement'>Advertisement</div>
        </div>
      </div>
    </>
  )
}

export default Home