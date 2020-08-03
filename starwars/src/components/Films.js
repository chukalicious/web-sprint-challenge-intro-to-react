import React, {useState, useEffect} from "react"
import styled from "styled-components"
import { Line } from "./Character"
import axios from "axios"

const Arrow = styled.p`
    margin: -1rem 0 0 0 ; 
`

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
// console.log(props.films)

const [api, setApi] = useState(props.films)
console.log(api)

useEffect(() => {
    axios.get(api)
    .then((response) => {
        /* console.log(response.data.title) */
        setApi(response.data.title)
        /* console.log(setApi()) */
    })
    .catch(err => console.log(err))
}, [])


//props.films is where the urls for the movies are
    // {console.log(props)}
    return (
        <div>
            <FilmsDiv>
            <Line>Title: {api}</Line>
            <Line>Episode: {props.films}</Line>
            <Line>Release date: {props.films}</Line>
            </FilmsDiv>
            
        </div>
    )
}

export default Films
