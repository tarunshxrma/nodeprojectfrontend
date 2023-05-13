import React from 'react'
import Navbar from './Navbar'
import "./Components.css"
import { Link } from 'react-router-dom'
import {AiOutlineArrowDown} from 'react-icons/ai'
import axios from 'axios'
import { useState,useEffect } from 'react'

const Food = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
        axios.get("https://node-backend-project-z8jx.onrender.com/api/category/food")
        .then((response)=>setData(response.data))
        .catch((error)=>console.log("Error",error))
    },[])
  return (
    <>
    <Navbar/>
    <div className="page-heading">Food <hr className="hr-under"></hr></div>
    <div className='latest'>
    <div>
    {
    data.filter((item)=> {return item.category==="food" && item.id===78}).map((element)=>(
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
    data.filter((item)=> {return item.category==="food" && item.id===79}).map((element)=>(
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
    data.filter((item)=> {return item.category==="food" && item.id===80}).map((element)=>(
      <div className='latest3' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link> 
        <p>{element.DataDescription}</p>
        </div>
    ))
    }
    </div>
    </div>
    <div className='data-container'>
    <div className='data'>
    {
    data.filter((item)=> {return item.category==="food" && item.id===81}).map((element)=>(
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
    data.filter((item)=> {return item.category==="food" && item.id===82}).map((element)=>(
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
    data.filter((item)=> {return item.category==="food" && item.id===83}).map((element)=>(
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
    data.filter((item)=> {return item.category==="food" && item.id===84}).map((element)=>(
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
    data.filter((item)=> {return item.category==="food" && item.id===85}).map((element)=>(
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
    data.filter((item)=> {return item.category==="food" && item.id===86}).map((element)=>(
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
    data.filter((item)=> {return item.category==="food" && item.id===87}).map((element)=>(
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
    data.filter((item)=> {return item.category==="food" && item.id===88}).map((element)=>(
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
    data.filter((item)=> {return item.category==="food" && item.id===89}).map((element)=>(
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
    data.filter((item)=> {return item.category==="food" && item.id===90}).map((element)=>(
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
    data.filter((item)=> {return item.category==="food" && item.id===91}).map((element)=>(
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
    data.filter((item)=> {return item.category==="food" && item.id===92}).map((element)=>(
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
    <div className='top-posts'>
      <div className='top-posts-heading'>Top Posts <hr className="hr-under3"></hr></div>
      {
    data.filter((item)=> {return item.category==="food" && item.id===93}).map((element)=>(
      <div className='top-post1' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <h1>1</h1>
        </div>
    ))
    }
    <hr></hr>
      {
    data.filter((item)=> {return item.category==="food" && item.id===94}).map((element)=>(
      <div className='top-post2' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <h1>2</h1>
        </div>
    ))
    }
    <hr></hr>
      {
    data.filter((item)=> {return item.category==="food" && item.id===95}).map((element)=>(
      <div className='top-post3' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <h1>3</h1>
        </div>
    ))
    }
    <hr></hr>
      {
    data.filter((item)=> {return item.category==="food" && item.id===96}).map((element)=>(
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
    <div className='load-more'><AiOutlineArrowDown/>LOAD MORE</div>
    </>
  )
}

export default Food