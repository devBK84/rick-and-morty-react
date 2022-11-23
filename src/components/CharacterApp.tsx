import ButtomComponent from "./ButtomComponent";
import GalleryComponent from "./GalleryComponent";
import {RICKANDMORTYCHARACTERS} from "./rickAndMortyCharacters";
import React from "react";

export default function CharacterApp(){

    return (
        <div>
            <ButtomComponent></ButtomComponent>
            <GalleryComponent characters={RICKANDMORTYCHARACTERS}></GalleryComponent>
        </div>
    )
}