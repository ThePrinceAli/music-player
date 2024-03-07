import React from 'react'
import styled from 'styled-components'

const Song = ({ img, artist, title }) => {
    return (
        <SongContainer>
            <img src={img} alt="" srcset="" />
            <div className="info">
                <h5>{artist}</h5>
                <p>{title}</p>
            </div>
        </SongContainer>
    )
}
const SongContainer = styled.div`
background-color:#5C469C;
margin:5px 0;
display:flex;
justify-content: space-between;
align-items: center;
color:white;
padding:0 10px;
img{
    width:80px;
    height:80px;
    border-radius:50%;
}
h5{
    font-size:20px;
}
p{
    font-size:15px;
    
}
`
export default Song
