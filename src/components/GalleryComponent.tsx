import {Characater} from "../model/Characater";
import CharacterCardComponent from "./CharacterCardComponent";
import "./CharacterGallery.css";
import React, {useState} from "react";
import {logDOM} from "@testing-library/react";

type GalleryComponentProps = {
    characters: Characater[]
}
export default function GalleryComponent(props: GalleryComponentProps) {

    const [searchText, setSearchText] = useState("all")
    const safeInput = (event: any) => {
        console.log(event)
        setSearchText(event.target.value)
    }

    const filterCharacters = props.characters.filter((character) => {
        if (character.name.toLowerCase().includes (searchText.toLowerCase())) {
            return true
        } else {
            return false
        }
    })
    const CharacterComponents = filterCharacters.map((character: Characater, index) => {

        return <CharacterCardComponent character={character} key={character.id}></CharacterCardComponent>


    })

    return (
        <div>
            <input onChange={safeInput}/>
            <p>{searchText}</p>
            <section className={"Gallery"}>{CharacterComponents}</section>
            <br/>
        </div>)
}


// return items.filter((item) => {
// return searchParam.some((newItem) => {
// return (
// item[newItem]
// .toString()
//                 .toLowerCase()
//                 .indexOf(q.toLowerCase()) > -1