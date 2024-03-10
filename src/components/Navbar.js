import React from 'react'
import { GiMusicalNotes } from "react-icons/gi";
import styled from 'styled-components';
const Navbar = ({ toggleSongs }) => {
    return (
        <Nav>
            <h1>Chill</h1>
            <button onClick={toggleSongs}>List <GiMusicalNotes /></button>
        </Nav>
    )
}
const Nav = styled.nav`
display:flex;
justify-content: space-around;
color:white;
align-items:center;
height:10vh;
h1{
    font-size:40px;
}
button{
    background-color: transparent;
    border:2px solid white;
    color:white;
    border-radius:7px;
    padding:7px 15px;
    font-size:20px;
    cursor:pointer;
}

`
export default Navbar
