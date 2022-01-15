import React, { useEffect, useState } from 'react'
import axios from "axios"
import {FaAngleDoubleRight} from "react-icons/fa"
// switched to the permanent api 
const data = "https://course-api.com/react-tabs-project"

const App = () => {

  // for loading page setupt 
  const [loading, setLoading] = useState(true);
  // for fetching api
  const [jobs, setJobs] = useState([])
  // values to setupt the array of button tabs
  const [value, setValue] = useState(0)
  const fetchData = async () => {
    const response = await axios.get(data)
    const finalData = response.data
    setJobs(finalData)
    setLoading(false)
    console.log(finalData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return (
    <section className='section loading'>
       <h1> Loading... </h1>
    </section>)
  }
  const { company, dates, duties, title } = jobs[value]
  return (
    <>
      <section className='section' >
        <div className="title" >
          <h2> experiance </h2>
          <div className="underline" > </div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
          {
            jobs.map((item, index) => {
              return (
                <button key={item.id} onClick={() => setValue(index)} className={`job-btn ${index === value && 'active-btn'}`}>{item.company}</button>
              )
            })
          }
          </div>
          <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {
            duties.map((duty, index)=>{
              return (
                <div key={index} className="job-desc">
                     <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                    <p>{duty}</p>
                </div>
              )
            })
          }
        </article>
        </div>
        {/* job info */}
         <button className='btn' type='button'>  <a href="mailto:sourabh.ask12@gmail.com"> more info</a></button>
      </section>
    </>
  )
}

export default App