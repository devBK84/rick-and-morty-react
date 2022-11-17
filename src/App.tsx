import React from 'react';
import logo from './logo.svg';
import "./App.css"
import GalleryComponent from "./components/GalleryComponent";
import {RICKANDMORTYCHARACTERS} from "./components/rickAndMortyCharacters";
import ButtomComponent from "./components/ButtomComponent";


function App() {
    return (
        <div className="App">
            <h1>Rick and Morty Characters</h1>
            <ButtomComponent></ButtomComponent>
            <GalleryComponent characters={RICKANDMORTYCHARACTERS}></GalleryComponent>
        </div>
    );
}

export default App;
