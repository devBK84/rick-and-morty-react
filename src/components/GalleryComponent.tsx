import {Characater} from "../model/Characater";
import CharacterCardComponent from "./CharacterCardComponent";

type GalleryComponentProps = {
    characters:Characater[]
}
export default function GalleryComponent(props:GalleryComponentProps) {
   const CharacterComponents = props.characters.map((character:Characater,index) => {
       return <CharacterCardComponent character={character}key={character.id}></CharacterCardComponent>

   })
    return(<section>{CharacterComponents}</section>)
}