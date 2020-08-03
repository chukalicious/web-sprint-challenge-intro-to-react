// Write your Character component here


import React from "react"
import Films from "./Films"
import styled from 'styled-components'


const CharacterCard = styled.div`
    display: flex; 
    flex-direction: column; 
`

const Line = styled.p`
    margin: .2rem; 
`

const Character = (props) => {

    return(

        <CharacterCard>
            <h2>{props.name}</h2>
            <Line>Gender: {props.gender.toUpperCase()}</Line>
            <Line>Birth Year: {props.birthYear}</Line>
            <Line>Height: {props.height}</Line>
            <Line>Hair Color: {props.hair.toUpperCase()}</Line>
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