import { NoteCard } from "../../shared";
import { Note } from "../../../types";
import { Link } from "react-router-dom";


type NoteListProps = {
  note?: Note[];
};


const NoteList: React.FC<NoteListProps> = ({ note }) => {
  return (
    <ul>
      {note?.map((note) => (
        <Link key={note.id} to={`/note/${note.id}`}>
          <NoteCard note={note}/>
        </Link>
      ))}
    </ul>
  );
};

export default NoteList;
