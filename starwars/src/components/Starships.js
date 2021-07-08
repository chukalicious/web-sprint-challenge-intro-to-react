import React, {useState, useEffect} from "react"
import axios from "axios"

const Starships = (props) => {
    console.log(props)
    const[ships, setShips] = useState(props)

    useEffect(() => {
        axios.get(props)
        .then((response) => {
            console.log(response)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>Starships go here</div>
    )
}

export default Starships