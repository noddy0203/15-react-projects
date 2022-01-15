import React, { useState } from 'react'
import menu from "./data"
import Menu from './Menu'
import Categories from "./Categories"

const categori =   ["all", ...new Set(menu.map((item)=>item.category))]
const App = () => {

  const [menuItem, setMenuItem] = useState(menu)
  const [categories, setCategories] = useState(categori)

  const filterItem = (category) => {
    if(category === "all"){
      setMenuItem(menu)
      return;
    }
    const newItem = menu.filter((item) => item.category === category)
    return setMenuItem(newItem)
  }


  return (

    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories filterItem={filterItem} categories={categories}/>
          <Menu menuItem={menuItem} />
        </section>
      </main>
    </>
  )
}

export default App
