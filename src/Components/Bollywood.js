import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import "./Components.css"
import { Link } from 'react-router-dom'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import axios from 'axios'

const Bollywood = () => {
  const [data, setData] = useState([]);
  const [more, setMore] = useState(false);
  const loadMore = () => {
    setMore(!more);
  }
  useEffect(() => {
    axios.get("https://node-backend-project-z8jx.onrender.com/api/category/bollywood")
      .then((response) => setData(response.data))
      .catch((error) => console.log("Error", error))
  }, [])
  console.log(data);
  return (
    <>
      <Navbar />
      <div className="page-heading">Bollywood <hr className="hr-under"></hr></div>
      <div className='latest'>
        <div>
          {
            data.filter((item) => { return item.category === "bollywood" && item.id === 2 }).map((element) => (
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
            data.filter((item) => { return item.category === "bollywood" && item.id === 3 }).map((element) => (
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
            data.filter((item) => { return item.category === "bollywood" && item.id === 4 }).map((element) => (
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
              data.filter((item) => { return item.category === "bollywood" && item.id >= 5 && item.id <= 16 }).map((element, index) => (
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
              data.filter((item) => { return item.category === "bollywood" && item.id >= 5 && item.id <= 10 }).map((element, index) => (
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
              data.filter((item) => { return item.category === "bollywood" && item.id === 18 }).map((element) => (
                <div className='top-post2' key={element.id}>
                  <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <h1>2</h1>
                </div>
              ))
            }
            <hr></hr>
            {
              data.filter((item) => { return item.category === "bollywood" && item.id === 19 }).map((element) => (
                <div className='top-post3' key={element.id}>
                  <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
                  <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
                  <h1>3</h1>
                </div>
              ))
            }
            <hr></hr>
            {
              data.filter((item) => { return item.category === "bollywood" && item.id === 20 }).map((element) => (
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

export default Bollywood