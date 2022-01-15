import React from 'react'
import Tour from './Tour'
const Tours = ({data}) => {
    return (
        <>

            {
                data.map((tour)=>{
                    return <Tour key={tour.id} {...tour} />
                })
            }

        </>
    )
}

export default Tours
