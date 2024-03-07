import React, { useRef } from 'react'
import { GiPreviousButton } from "react-icons/gi";
import { GiPlayButton } from "react-icons/gi";
import { GiNextButton } from "react-icons/gi";
import styled from 'styled-components';
const Player = ({ songs, playing, setPlaying }) => {
    const songRef = useRef()

    const playSongHandler = () => {
        if (playing) {
            songRef.current.play()
            setPlaying(!playing)
        } else {
            songRef.current.pause()
            setPlaying(!playing)

        }
    }

    return (
        <PlayerContainer>
            <audio ref={songRef} src={songs[0].audio} />
            <div className="duration">
                <span>Start time</span>
                <input type="range" name="" id="" />
                <span>End time</span>
            </div>
            <div className="icons">
                <GiPreviousButton className='icon' />
                <GiPlayButton onClick={playSongHandler} className='icon' />
                <GiNextButton className='icon' />
            </div>

        </PlayerContainer>
    )
}
const PlayerContainer = styled.div`

.icons{
    margin-top:20px;
    font-size:40px;
    color:white;
    display:flex;
    justify-content: center;
    align-items: center;
   }
   .icon{
    cursor:pointer;
   }
   .icon:nth-child(2){
    font-size:60px;
    margin:0 20px;
    
   }
   .duration{
    display:flex;
    align-items:center;
    justify-content: center;
   }
   input[type="range"]{
    margin:0 10px;
   }
   .duration span{
    color:white;
   }
`
export default Player
