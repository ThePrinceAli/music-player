import React from 'react'
import styled from 'styled-components'

const Main = ({ songs }) => {

    return (
        <MainContainer>
            <h1>Relax Time</h1>
            <img src={songs[0].cover} alt="" srcset="" />
            <h4>{songs[0].artist}</h4>
            <p>{songs[0].name}</p>
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
