import React, { useState, useEffect } from 'react'
import Loading from "./Loading"
import Tour from './Tour'
import axios from 'axios'
const url = 'https://course-api.com/react-tours-project'

const App = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const removeTour = (id) => {
        const newArray = data.filter((tourrs) => tourrs.id !== id);
        setData(newArray)
    }

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await axios.get(url)
            const tour = response.data()
            setData(tour)
            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.log("error fetching details from the server", error)
        }

    }

    useEffect(() => {
        fetchData()
    }, [])

    if (loading) {
        return <Loading />
    }

    if (data.length === 0) {
        return (
            <div>
                <h1> no tours left <span className="badge bg-secondary"
                    onClick={fetchData} > Refresh </span></h1>
            </div>
        )
    }

    return (
        <>
            <main >
                <h2> Tour Destinations </h2>
                <Tour data={data} removeTour={removeTour} />
            </main>

        </>
    )
}

export default App