import { NoteCard } from "../../shared";
import { Note, Notes } from "../../../types";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { USER_FAVORITE_NOTES } from "../../../apollo";
import { useAuth } from "../../../hooks";

type NoteListProps = {
  note?: Notes;
};

type FavoritesNotesQuery = {
  favoritesNotes?: Note[]
}

const NoteList = ({ note }: NoteListProps) => {
  const { id } = useAuth();
  const { data } = useQuery<{userById: FavoritesNotesQuery}>(USER_FAVORITE_NOTES, {
    variables: { id: id },
  });

  return (
    <ul>
      {note?.notes?.map((note) => (
        <Link key={note.id} to={`/note/${note.id}`}>
          <NoteCard note={note} userFavoriteNotes={data?.userById.favoritesNotes} />
        </Link>
      ))}
    </ul>
  );
};

export default NoteList;
