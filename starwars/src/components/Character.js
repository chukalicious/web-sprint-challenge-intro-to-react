// Write your Character component here


import React from "react"
import Films from "./Films"
import styled from 'styled-components'


const CharacterCard = styled.div`
    display: flex; 
    flex-direction: column; 
`
const Character = (props) => {

    return(

        <CharacterCard>
            <h2>{props.name}</h2>
            <p>Gender: {props.gender.toUpperCase()}</p>
            <p>Birth Year: {props.birthYear}</p>
            <p>Height: {props.height}</p>
            <p>Hair Color: {props.hair.toUpperCase()}</p>
            {/* <p>{Bio Fact}</p> */}
            {/* <p>{Bio Fact}</p> */}

            <div>
                <h3>Films</h3>
                <Films /> 
            </div>

        </CharacterCard>
    )
}

export default Character