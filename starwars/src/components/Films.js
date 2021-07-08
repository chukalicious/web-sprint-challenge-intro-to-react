import React, {useState, useEffect} from "react"
import styled from "styled-components"
import { Line } from "./Character"
import axios from "axios"

const FilmsDiv = styled.div`
    display: flex; 
    margin: 1.5rem auto; 
    width: 75%; 
    flex-direction: column;
    text-align: left; 
    border-radius: .3rem; 
    padding: .5rem; 
    background-color: #ECDFD2; 
`

const Films = (props)=> {

const [title, setTitle] = useState(props.films)
const [episode, setEpisode] = useState(props.films)
const [releaseDate, setReleaseDate] = useState(props.films)

useEffect(() => {
    axios.get(title)
    .then((response) => {
        setTitle(response.data.title)
    })
    .catch(err => console.log(err))
}, [])

useEffect(() => {
    axios.get(episode)
    .then((response) => {
        setEpisode(response.data.episode_id)
    })
    .catch(err => console.log(err))
}, [])

useEffect(() => {
    axios.get(releaseDate)
    .then((response) => {
        setReleaseDate(response.data.release_date)
    })
    .catch(err => console.log(err))
}, [])

    return (
        <div>
            <FilmsDiv>
            <Line>Title: {title}</Line>
            <Line>Episode: {episode}</Line>
            <Line>Release date: {releaseDate}</Line>
            </FilmsDiv>
            
        </div>
    )
}

export default Films
