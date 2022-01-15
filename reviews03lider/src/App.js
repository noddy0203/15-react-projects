import React, { useEffect, useState } from 'react'
import people from './data'
import {FiChevronRight, FiChevronLeft} from "react-icons/fi"
import {FaQuoteRight} from "react-icons/fa"

const App = () => {

  const [review , setReview] = useState(people)
  const [index , setIndex] = useState(0)
   
  useEffect(()=>{
    const lastIndex = review.length-1;
    if(index < 0) {
      return setIndex(lastIndex)
    }

    if(index > lastIndex){
      return setIndex(0)
    }
  }, [review , index])

   useEffect(()=>{
      const intervalForSlider = setInterval(() => {
             setIndex(index+1)
      }, 4000);
      return ()=>{
        clearInterval(intervalForSlider)
      }
   }, [index])
  return (
    <>
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>review
          </h2>
        </div>
        <div className="section-center">
          {
            review.map((person,personIndex)=>{
              const {id , quote, name, title,image} = person;
              let position = 'nextSlide';
              if (personIndex === index) {
                position = 'activeSlide';
              }
              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)
              ) {
                position = 'lastSlide';
              }
              return (
                <article className={position} key={id}>
                  <img src={image} alt={name} className="person-img" />
                  <h4>{name}</h4>
                  <p className="title">{title}</p>
                  <p className="text">{quote}</p>
                  <FaQuoteRight className="icon" />
                </article>
              );
            })
          }
                  <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
        </div>
        </section>  
    </>
    )
}

export default App