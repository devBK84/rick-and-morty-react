import React from 'react';
import logo from './logo.svg';
import "./App.css"
import GalleryComponent from "./components/GalleryComponent";
import {RICKANDMORTYCHARACTERS} from "./components/rickAndMortyCharacters";
import ButtomComponent from "./components/ButtomComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import CharacterApp from "./components/CharacterApp";


function App() {
    return (
        <div className="App">
            <h1>Rick and Morty Characters</h1>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path={"/"}element={<p>"Rick and Morty"</p>}></Route>
                    <Route path={"/home"}element={"Home"}></Route>
                    <Route path={"/characters"}element={<CharacterApp/>}></Route>
                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default App;
