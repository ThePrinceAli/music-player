import React from "react";
import Song from "./Song";
import styled from "styled-components";

const Songs = ({ songs, showSongs }) => {
    return (
        <SongsContainer>
            <div className={showSongs ? "show" : "hide"}>
                {songs.map((song, index) => (
                    <Song img={song.cover} artist={song.artist} title={song.name} />
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
`;

export default Songs;
