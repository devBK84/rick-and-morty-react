import {Characater} from "../model/Characater";
import CharacterCardComponent from "./CharacterCardComponent";
import "./CharacterGallery.css";
import React, {useState} from "react";

type GalleryComponentProps = {
    characters: Characater[]
    deleteCharacter(id: number): void
}
export default function GalleryComponent(props: GalleryComponentProps) {


    const [searchText, setSearchText] = useState("")


    const safeInput = (event: any) => {
        console.log(event)
        setSearchText(event.target.value)
    }

    const filterCharacters = props.characters.filter((character) => {
        return character.name.toLowerCase().includes(searchText.toLowerCase());
    })
    const CharacterComponents = filterCharacters.map((character: Characater, index) => {
        return <CharacterCardComponent character={character} key={character.id}
                                       deletecharacter={props.deleteCharacter}></CharacterCardComponent>
    })

    return (
        <div>
            <input onChange={safeInput}/>
            <p>{searchText}</p>
            <section className={"Gallery"}>{CharacterComponents}</section>
            <br/>
        </div>)
}

