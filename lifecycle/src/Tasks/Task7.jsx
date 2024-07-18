import React, { useEffect, useState } from 'react'
import axios from "axios"

function Task7() {
    const [city, setCity] = useState("")
    const [search, setSearch] = useState(false)
    const apiKey = "592a2792690363fe7089e7c049f6ae85"
    useEffect(() => {
        if (search) {
            getWeather()
        }
    }, [search])
    const getWeather = async () => {
        let data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        console.log(data);
        setSearch(false)
    }
    return (
        <>
            <h1>Weather App</h1>
            <div>
                <input type="search" name="search" id="search"
                    onChange={(e) => setCity(e.target.value)} value={city} />
                <button onClick={() => setSearch(true)}>Search</button>
            </div>
        </>
    )
}

export default Task7