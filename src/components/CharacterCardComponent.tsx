import {Characater} from "../model/Characater";
import "./CardCharacter.css";
import {useNavigate} from "react-router-dom";
type CharacterCardComponentProps = {
    character: Characater,
    deletecharacter(id: number): void
}



export default function CharacterCardComponent(props: CharacterCardComponentProps) {
    const navigate = useNavigate()
    function deleteCharacter(){
        props.deletecharacter(props.character.id)
    }
function detailsCharaters(){
   navigate("/characters/" + props.character.id)
}
    return (

        <div className={"Card-Character"}>
            <h1>{props.character.name}</h1>
            <img src={props.character.image} alt="404"></img>
            <h2>{props.character.status}</h2>
            <button onClick = {deleteCharacter}>Delete</button>
            <button onClick = {detailsCharaters}>Detail</button>
        </div>
)

}
