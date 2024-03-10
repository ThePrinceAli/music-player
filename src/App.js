import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import chillHop from './data'
import Main from './components/Main'
import Player from './components/Player'
import { GlobalStyled } from './components/GlobalStyled'
import Songs from './components/Songs'
import { CircleLoader } from 'react-spinners'

const App = () => {
  const [songs, setSongs] = useState([])
  const [loading, setLoading] = useState(true)
  const [showSongs, setShowSongs] = useState(false)
  const [playing, setPlaying] = useState(true)
  const [currentSong, setCurrentSong] = useState(chillHop[0])
  const songRef = useRef()
  setTimeout(() => {
    setLoading(false)
  }, 2000);
  useEffect(() => {
    setSongs(chillHop)
  }, [])

  const toggleSongs = () => {
    setShowSongs(!showSongs)
  }
  const playSongHandler = () => {
    if (playing) {
      songRef.current.play()
      setPlaying(!playing)
    } else {
      songRef.current.pause()
      setPlaying(!playing)
    }
  }

  const skipSong=(dir)=>{
    playSongSkip()
    activeSong()
    let currentIndex = songs.findIndex(song=>currentSong.id===song.id)
    if(dir==='next'){
      setCurrentSong(songs[(currentIndex+1)%songs.length])
    }else if(dir==='back'){
      if(currentIndex===0){
        setCurrentSong(songs[songs.length-1])
      }else{
        setCurrentSong(songs[(currentIndex-1)%songs.length])
      }
    }
  }
  
  const playSongSkip=()=>{
    if(!playing){
      const playPromise=songRef.current.play()
      if(playPromise !== undefined){
        playPromise.then(audio=>{
          songRef.current.play()
        })
      }
    }
  }
  const activeSong=()=>{
    const newSongArray = songs.map((song) => {
        if (song.id === currentSong.id) {
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
    <div>
      <GlobalStyled />
      <Navbar toggleSongs={toggleSongs} />
      {loading ? <CircleLoader color="#36d7b7" /> : <div>
        <Songs playSongSkip={playSongSkip} playSongHandler={playSongHandler} setSongs={setSongs} setCurrentSong={setCurrentSong} songs={songs} showSongs={showSongs} />
        <Main currentSong={currentSong} songs={songs} />
        <Player skipSong={skipSong} songRef={songRef} playSongHandler={playSongHandler} currentSong={currentSong} songs={songs} playing={playing} setPlaying={setPlaying} />
      </div>}

    </div>
  )
}

export default App
