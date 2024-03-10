import React from "react";
import Song from "./Song";
import styled from "styled-components";

const Songs = ({ playSongSkip, songs, playSongHandler, showSongs, setSongs, setCurrentSong }) => {
  return (
    <SongsContainer>
      <div className={showSongs ? "show" : "hide"}>
        {songs.map((song, index) => (
          <Song playSongSkip={playSongSkip} songs={songs} setSongs={setSongs} setCurrentSong={setCurrentSong} song={song} id={song.id} />
        ))}
      </div>
    </SongsContainer>
  );
};
const SongsContainer = styled.div`
  .hide {
    position: absolute;
    left: -400px;
    transition: all 1s linear;
    opacity: 0;
    overflow: auto;
    top: 0;
    display:flex;
    flex-direction: column;
    height: 100vh;
    width: 40vh;
  }
  .show {
    position: absolute;
    left: 0px;
    transition: all 1s linear;
    opacity: 1;
    overflow: auto;
    top: 0;
    display:flex;
    flex-direction: column;
    height: 100vh;
    width: 40vh;
  }
  ::-webkit-scrollbar-thumb{
    background-color: green;
    border-radius:10px;
  }
  ::-webkit-scrollbar-track{
    background-color: grey;
  }
  ::-webkit-scrollbar{
  width:6px;}
`;

export default Songs;
