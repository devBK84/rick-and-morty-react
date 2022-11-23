import ButtomComponent from "./ButtomComponent";
import GalleryComponent from "./GalleryComponent";
import {RICKANDMORTYCHARACTERS} from "../model/rickAndMortyCharacters";
import React, {useEffect, useState} from "react";
import {Characater} from "../model/Characater";
import axios from "axios";


export default function CharacterApp() {

    const [characters, setCharacters] = useState<Characater[]>([])
    useEffect(() => {
        getAllCharacters()
    }, [])

    function getAllCharacters() {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(response => {
                setCharacters(response.data.results)
            }).catch(error => console.error(error))
    }

    function deleteCharacter(id: number){
        const newCharacterList = characters.filter(function (character) {
            return character.id !== id;
        })
        setCharacters(newCharacterList)
    }

    return (
        <div>
            <button></button>
            <GalleryComponent deleteCharacter={deleteCharacter} characters={characters}></GalleryComponent>
        </div>
    )
}