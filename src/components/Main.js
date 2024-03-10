import React from 'react'
import styled from 'styled-components'

const Main = ({ songs, currentSong }) => {

    return (
        <MainContainer>
            <h1>Relax Time</h1>
            <img src={currentSong.cover} alt="" srcset="" />
            <h4>{currentSong.artist}</h4>
            <p>{currentSong.name}</p>
        </MainContainer>
    )
}
const MainContainer = styled.div`
margin:20px 0;
color:white;
h1{
    letter-spacing: 10px;
    text-transform: uppercase;
}
img{
    margin:20px 0;
    border-radius:50%;
    width:200px;
    height:200px;
}
p{
    margin:15px 0;
}
`

export default Main
