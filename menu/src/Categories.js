import React from 'react'

const Categories = ({filterItem , categories}) => {

    return (
        <>
           <div className="btn-container">
               {
                   categories.map((item , index)=>{
                        return (
                            <>
                            <button type="button" className='filter-btn' key={index}>
                                {item}
                            </button>
                            </>
                        )
                   })
               }
           </div>
        </>
    )
}

export default Categories
