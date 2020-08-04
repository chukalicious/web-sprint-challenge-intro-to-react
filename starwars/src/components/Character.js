// Write your Character component here
import React from "react"
import Films from "./Films"
import styled from "styled-components"

const CharacterCard = styled.div`
    display: flex; 
    flex-direction: column; 
    width: 65%; 
    margin: 2rem auto; 
    border-radius: .3rem; 
    padding: .5rem; 
    background-color: white; 
`
const Name = styled.h2`
    background-color: #ECDFD2;
    text-align: left; 
    margin: -.5rem -.5rem; 
    padding: .5rem 1rem;  
`

const Line = styled.p`
    margin: .2rem; 
    padding-top: 1rem; 
`

const Character = (props) => {

    return(

        <CharacterCard>
            <Name>{props.name}</Name>
            <Line>Gender: {props.gender.toUpperCase()}</Line>
            <Line>Birth Year: {props.birthYear}</Line>
            <Line>Height: {props.height}</Line>
            <Line>Hair Color: {props.hair.toUpperCase()}</Line>

            <div>
                <h3>Films</h3>
                {props.films.map((film, index) => {
                    return (
                        <Films films={film} key={index}/> 
                    )
                })}

                <h3>Starships</h3>
            </div>

        </CharacterCard>

    )
}

export default Character
export { Line }