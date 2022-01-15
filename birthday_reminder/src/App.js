
import React, { useState } from 'react'
import data from "./data"
import List from "./List"
const App = () => {

  const [user , setUser] = useState(data)

  return (

    <>
      <main>
        <div className="mainDiv">
          <h2>
            {user.length} birthdays today
          </h2>
          <List user={user} />
          <button onClick={()=>setUser([])}>Clear all</button>

        </div>
      </main>
    </>
  )
}

export default App
