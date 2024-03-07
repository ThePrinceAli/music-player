import React, { useEffect, useState } from 'react'
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
  setTimeout(() => {
    setLoading(false)
  }, 2000);
  useEffect(() => {
    setSongs(chillHop)
  }, [])

  const toggleSongs = () => {
    setShowSongs(!showSongs)
  }

  return (
    <div>
      <GlobalStyled />
      <Navbar toggleSongs={toggleSongs} />
      {loading ? <CircleLoader color="#36d7b7" /> : <div>
        <Songs songs={songs} showSongs={showSongs} />
        <Main songs={songs} />
        <Player songs={songs} playing={playing} setPlaying={setPlaying} />
      </div>}

    </div>
  )
}

export default App
