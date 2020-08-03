// Write your Character component here
import React, {useState, useEffect} from "react"
import Films from "./Films"
import styled from "styled-components"
import axios from "axios"

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

    const [movies, setMovies] = useState([])]
    useEffect(() => {
        axios.get({movies})//"http://swapi.dev/api/films/1/"
        .then((res) => {
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }, [])
    
    return(

        <CharacterCard>
            <Name>{props.name}</Name>
            <Line>Gender: {props.gender.toUpperCase()}</Line>
            <Line>Birth Year: {props.birthYear}</Line>
            <Line>Height: {props.height}</Line>
            <Line>Hair Color: {props.hair.toUpperCase()}</Line>
            {/* <p>{Bio Fact}</p> */}
            {/* <p>{Bio Fact}</p> */}

            <div>
                <h3>Films</h3>
                {console.log(props.films)}
                
                {props.films.map((film, index) => {
                    return (
                        <Films films={film} key={index}/> 
                    )
                })}
            </div>

        </CharacterCard>
    )
}

export default Character
export { Line }