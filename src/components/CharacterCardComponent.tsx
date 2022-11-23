import {Characater} from "../model/Characater";
import "./CardCharacter.css";
type CharacterCardComponentProps = {
    character: Characater,
    deletecharacter(id: number): void
}



export default function CharacterCardComponent(props: CharacterCardComponentProps) {
    function deleteCharacter(){
        props.deletecharacter(props.character.id)
    }

    return (

        <div className={"Card-Character"}>
            <h1>{props.character.name}</h1>
            <button onClick = {deleteCharacter}>Delete</button>
            <img src={props.character.image} alt="404"></img>
            <h2>{props.character.status}</h2>
        </div>
)

}
