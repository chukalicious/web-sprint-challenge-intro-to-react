// Write your Character component here


import React from "react"

const Character = (props) => {

    return(

        <div>
            <h2>{props.name}</h2>
            <p>Gender: {props.gender.toUpperCase()}</p>
            <p>Birth Year: {props.birthYear}</p>
            <p>Height: {props.height}</p>
            <p>Hair Color: {props.hair.toUpperCase()}</p>
            {/* <p>{Bio Fact}</p> */}
            {/* <p>{Bio Fact}</p> */}


        </div>
    )
}

export default Character