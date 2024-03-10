import React, { useEffect, useRef, useState } from 'react'
import { GiPreviousButton } from "react-icons/gi";
import { GiPlayButton } from "react-icons/gi";
import { GiNextButton } from "react-icons/gi";
import { GiPauseButton } from "react-icons/gi";
import styled from 'styled-components';
const Player = ({ skipSong, songRef, playSongHandler, playing, setPlaying, currentSong }) => {

    const [current, setCurrent] = useState()
    const [duration, setDuration] = useState()

    

    const timeUpdate = (e) => {
        setCurrent(e.target.currentTime)
        setDuration(e.target.duration)
    }
    const playHandler = (e) => {
        songRef.current.currentTime = e.target.value
    }
    const getTime = (time) => {
        return Math.floor(time / 60) + ":" + ('0' + Math.floor(time % 60)).slice(-2)
    }
    return (
        <PlayerContainer>
            <audio onLoadedMetadata={timeUpdate} onTimeUpdate={timeUpdate} ref={songRef} src={currentSong.audio} />
            <div className="duration">
                <span>{getTime(current)}</span>
                <input onChange={playHandler} min='0' max={duration} value={current} type="range" name="" id="" />
                <span>{duration ? getTime(duration) : '0:00'}</span>
            </div>
            <div className="icons">
                <GiPreviousButton onClick={()=>skipSong('back')} className='icon' />
                {!playing ? <GiPauseButton onClick={playSongHandler} className='icon' /> : <GiPlayButton onClick={playSongHandler} className='icon' />}
                <GiNextButton onClick={()=>skipSong('next')} className='icon' />
            </div>

        </PlayerContainer>
    )
}
const PlayerContainer = styled.div`

.icons{
    margin-top:19px;
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
// console.log(1%100)