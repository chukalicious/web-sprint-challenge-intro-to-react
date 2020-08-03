import React, {useState, UseEffect, useEffect} from "react"
import styled from "styled-components"
import { Line } from "./Character"
import axios from "axios"

const Arrow = styled.p`
    margin: -1rem 0 0 0 ; 
`

const FilmsDiv = styled.div`
    display: flex; 
    margin: 0 auto; 
    width: 75%; 
    flex-direction: column;
    text-align: left; 
`

const Films = (props)=> {

// console.log(props.films)
//props.films is where the urls for the movies are

    return (
        <div>
            <FilmsDiv>
            <Line>Title: </Line>
            <Line>Episode: </Line>
            <Line>Release date: </Line>
            </FilmsDiv>
            
        </div>
    )
}

export default Films
