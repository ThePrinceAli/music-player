import React from 'react'
import styled from 'styled-components'

const Song = ({ playSongSkip, song, songs, id, setCurrentSong, setSongs }) => {
    const chooseSong = () => {
        activeSong()
        playSongSkip()
        setCurrentSong(song)
    }
    const activeSong=()=>{
        const newSongArray = songs.map(song => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true
                }
            } else {
                return {
                    ...song,
                    active: false
                }
            }
        })
        setSongs(newSongArray)
    }

    return (
        <SongContainer className='selected' onClick={chooseSong}>
            <div className={song.active ? "selected" : ""}>
                <img src={song.cover} alt="" srcset="" />
                <div className="info">
                    <h5>{song.artist}</h5>
                    <p>{song.name}</p>
                </div>
            </div>
        </SongContainer>
    )
}
const SongContainer = styled.div`
>div{
background-color:#5C469C;
margin:5px 0;
display:flex;
justify-content: space-between;
align-items: center;
color:white;
padding:0 10px;
cursor:pointer;
}
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
.selected{
    background-color:green;
}
`
export default Song
