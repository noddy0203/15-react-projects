import React, { useState } from 'react'
import para from './data'

const App = () => {

  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();

    let countInNumber = Number(count)
    if (count <=0) {
      countInNumber = 1
      alert("It's in negative, so I'll be positive for you.")
      setCount(1)
    }
    if(count > 9){
       countInNumber = 9
       alert("we can generate only 9 paragraphs now.")
       setCount(9)
    }
    setData(para.slice(0, countInNumber))

  }
  return (
    <>
      <section className="section-center">
        <h3>tired of boring lorem ipsum just try now the all new <span className='hipsum'>/hipsum</span>.</h3>
        <form className='lorem-form' onSubmit={handleSubmit}>
          <label htmlFor="paraClass">No. of paragraphs you want -</label>
          <input type="text" name='paraClass' value={count} onChange={(e) => setCount(e.target.value)} />
          <button className='btn'>generate</button>
        </form>
        <article className="lorem-text">
          {
data.map((element , index)=>{
  return (
    
    <p key={index}>{index} {element}</p>
   
  )
})
          }
        </article>
      </section>
    </>
  )
}

export default App
