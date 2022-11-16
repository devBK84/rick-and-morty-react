import {Characater} from "../model/Characater";

type CharacterCardComponentProps = {
    character: Characater
}


export default function CharacterCardComponent(props: CharacterCardComponentProps) {
    return (

        <div>
            <h1>{props.character.name}</h1>
            <img src={props.character.image}></img>
            <h2>{props.character.status}</h2>
        </div>)

}
