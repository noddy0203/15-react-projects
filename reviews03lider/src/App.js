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

   
  return (
    <>
        
    </>
    )
}

export default App