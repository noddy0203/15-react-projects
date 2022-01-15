import React, { useState } from 'react'
import people from './data'
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa"
const Review = () => {

    const [employee, setEmployee] = useState(0);
    const [readMore , setReadMore] = useState(true)
    //  here we dont have to render the whole list just rendering one person at a time 
    // as useState changes change the person so dont need to use map method
    const { id, name, job, image, text } = people[employee]

    const limitTheNumber = (number) => {
        if (number > people.length - 1) {
            return 0
        }
        if (number < 0) {
            return people.length - 1
        }
        return number
    }
    const prevPerson = () => {
        setEmployee((index) => {              //here we assume index as employee
            let newEmployee = index - 1
            return limitTheNumber(newEmployee)
        })
    }

    const nextPerson = () => {
        setEmployee((employee) => {        //we can put employee or any other thing doesnt matter
            let newEmployee = employee + 1
            return limitTheNumber(newEmployee)
        })
    }

    const randomPerson = () => {
        const random = Math.floor(Math.random() * people.length)
        if (random === employee) {
            random = employee + 1
        }

        return limitTheNumber(setEmployee(random))
    }
    return (
        <>
            <article className="review" key={id}>
                <div className="img-container">
                    <img src={image} alt="" className='person-img' />
                    <span className='quote-icon'>
                        <FaQuoteRight />
                    </span>
                </div>
                <h4 className='author'>{name}</h4>
                <p className='job'>{job}</p>
                <p className='info'>
                    {readMore ? text : `${text.substring(0,20)}...`}
                    <span onClick={()=>setReadMore(!readMore)}>
                         { readMore ? "show less" : "read more"}
                    </span>
                </p>
                <div className='button-container'>
                    <button className='prev-btn' onClick={prevPerson}>
                        <FaChevronLeft />
                    </button>
                    <button className='next-btn' onClick={nextPerson}>
                        <FaChevronRight />
                    </button>
                </div>
                <button className='random-btn' onClick={randomPerson}>
                    surprise me
                </button>
            </article>
        </>
    )
}

export default Review
