import React from "react"
import styled from "styled-components"
import { Line } from "./Character"

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
//props.films is where the urls for the movies are
    // {console.log(props)}
    return (
        <div>
            <FilmsDiv>
            <Line>Title: {props.films}</Line>
            <Line>Episode: {props.films}</Line>
            <Line>Release date: {props.films}</Line>
            </FilmsDiv>
            
        </div>
    )
}

export default Films
