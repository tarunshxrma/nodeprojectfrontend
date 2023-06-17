import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import "./Components.css"
import { Link } from 'react-router-dom'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import axios from 'axios'

const Fitness = () => {
  const [data, setData] = useState([]);
  const [more, setMore] = useState(false);
  const loadMore = () => {
    setMore(!more);
  }
  useEffect(() => {
    axios.get("https://node-backend-project-z8jx.onrender.com/api/category/fitness")
      .then((response) => setData(response.data))
      .catch((error) => console.log("Error", error))
  }, [])
  console.log(data);
  return (
    <>
      <Navbar />
      <div className="page-heading">Fitness <hr className="hr-under"></hr></div>
      <div className='latest'>
        <div>
          {
            data.filter((item) => { return item.category === "fitness" && item.id === 59 }).map((element) => (
              <div className='latest1' key={element.id}>
                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                <div>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <p>{element.DataDescription}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div>
          {
            data.filter((item) => { return item.category === "fitness" && item.id === 60 }).map((element) => (
              <div className='latest2' key={element.id}>
                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                <div>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <p>{element.DataDescription}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div>
          {
            data.filter((item) => { return item.category === "fitness" && item.id === 61 }).map((element) => (
              <div className='latest3' key={element.id}>
                <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                <div>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <p>{element.DataDescription}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='data-container'>
        {more ?
          <div className='data'>
            {
              data.filter((item) => { return item.category === "fitness" && item.id >= 62 && item.id <= 73 }).map((element, index) => (
                <div className='data1' key={index}>
                  <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                  <div className='data-description'>
                    <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                    <p>{element.DataDescription}</p>
                  </div>
                </div>
              ))
            }
          </div>
          :
          <div className='data'>
            {
              data.filter((item) => { return item.category === "fitness" && item.id >= 62 && item.id <= 67 }).map((element, index) => (
                <div className='data1' key={index}>
                  <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                  <div className='data-description'>
                    <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                    <p>{element.DataDescription}</p>
                  </div>
                </div>
              ))
            }
          </div>
        }
        <div className='top-posts-container'>
          <div className='top-posts'>
            <div className='top-posts-heading'>Top Posts <hr className="hr-under3"></hr></div>
            {
              data.filter((item) => { return item.category === "fitness" && item.id === 68 }).map((element) => (
                <div className='top-post1' key={element.id}>
                  <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <h1>1</h1>
                </div>
              ))
            }
            <hr></hr>
            {
              data.filter((item) => { return item.category === "fitness" && item.id === 69 }).map((element) => (
                <div className='top-post2' key={element.id}>
                  <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <h1>2</h1>
                </div>
              ))
            }
            <hr></hr>
            {
              data.filter((item) => { return item.category === "fitness" && item.id === 70 }).map((element) => (
                <div className='top-post3' key={element.id}>
                  <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <h1>3</h1>
                </div>
              ))
            }
            <hr></hr>
            {
              data.filter((item) => { return item.category === "fitness" && item.id === 71 }).map((element) => (
                <div className='top-post4' key={element.id}>
                  <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <h1>4</h1>
                </div>
              ))
            }
            <hr></hr>
          </div>
          <div className='advertisement'>Advertisement</div>
        </div>
      </div>
      <div className='load-more'>
        {more ? <span onClick={loadMore}><AiOutlineArrowUp />LESS</span> : <span onClick={loadMore}><AiOutlineArrowDown />MORE</span>}
      </div>
    </>
  )
}

export default Fitness