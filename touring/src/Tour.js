import React, { useState } from 'react'

const Tour = ({id , image , price, name, info}) => {
   
    const [readMore, setReadMore] = useState(false)

    return (
        <>
            <main>
                <section>
                    <div className="card" >
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <h5 className="card-title">{price}</h5>
                            <p className="card-text"> {
                                readMore ? info : `${info.substring(0,200)}...`
                            }
                                <button className='btn btn-sm btn-primary' onClick={()=>setReadMore(!readMore)} >
                                   {readMore ? "show less" : "read more"}
                                </button>
                            </p>
                            <button className="btn btn-danger">not interested</button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Tour
