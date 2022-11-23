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
    let [filteredCharacters, setFilteredCharacters] = useState(props.characters)

    function deleteCharacter(id: number){
        const newCharacterList = filteredCharacters.filter(function (character) {
            return character.id !== id;
        })
        setFilteredCharacters(newCharacterList)
    }

    const safeInput = (event: any) => {
        console.log(event)
        setSearchText(event.target.value)
    }

    const filterCharacters = filteredCharacters.filter((character) => {
        return character.name.toLowerCase().includes(searchText.toLowerCase());
    })
    const CharacterComponents = filterCharacters.map((character: Characater, index) => {
        return <CharacterCardComponent character={character} key={character.id}
                                       deletecharacter={deleteCharacter}></CharacterCardComponent>
    })


    return (
        <div>
            <input onChange={safeInput}/>
            <p>{searchText}</p>
            <section className={"Gallery"}>{CharacterComponents}</section>
            <br/>
        </div>)
}

