import {NavLink} from "react-router-dom";
import "./CardCharacter.css"
import "./Navbar.css"
import CharacterApp from "./CharacterApp";

export default function Navbar() {
    return (
        <div className={"Navbar"}>
            <NavLink className={"NavLink"} to={"/"}>Rick and Morty</NavLink>
            <NavLink className={"NavLink"} to={"/Home"}>Home</NavLink>
            <NavLink className={"NavLink"} to={"/characters"}>Character</NavLink>
        </div>
    )
}