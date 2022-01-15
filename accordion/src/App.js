import React, { useEffect, useState } from 'react'
import axios from "axios"
import Post from './Post'

const url = "https://jsonplaceholder.typicode.com/posts"

const App = () => {
    const [data , setData] = useState([])

    const fetchData = async ()=>{
       const fetching = await axios.get(url)
       const finalData = fetching.data
       console.log(finalData)
       setData(finalData)
    }

    useEffect(()=>{
      fetchData()
    }, [])


  return (
    <>
      <main>
        <div className="container">
          <h3>The accordion template</h3>
          <section className="info">
                 {
                   data.slice(0,50).map((element)=>{
                      return <Post key={element.id} {...element}/>
                   })
                   }
                 
          </section>
        </div>
      </main>
    </>
  )
}

export default App
