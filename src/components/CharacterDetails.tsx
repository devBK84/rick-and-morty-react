import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Characater} from "../model/Characater";
import "./CharacterDetails.css"
import axios from "axios";


export default function CharacterDetails(){
const emptyCharacter:Characater={
    name:"",
    image:"",
    status:"",
    id: 0
}
    const params = useParams()
    const [character, setCharacter] = useState<Characater>(emptyCharacter)

    const id: string | undefined = params.id

    function getCharacterById(id: string){
        axios.get ("https://rickandmortyapi.com/api/character/"+id)
            .then(response => {setCharacter(response.data)})
            .catch(error=>console.error(error))
    }


    useEffect(()=>{
        if (id){
            getCharacterById(id)
        }
    },[])


    return(
        <div className={"CharacterDetails"}>
            <h1>{character.name}</h1>
            <img src={character.image}/>
            <p>{character.status}</p>
        </div>


    )
}