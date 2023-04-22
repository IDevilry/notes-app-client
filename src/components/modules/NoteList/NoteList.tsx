import { NoteCard } from "../../shared";
import { Note, Notes } from "../../../types";
import { NOTES, TOGGLE_FAVORITE, USER_FAVORITE_NOTES } from "../../../apollo";
import { useMutation, useQuery } from "@apollo/client";

type NoteListProps = {
  notes: Note[];
};

const NoteList: React.FC<NoteListProps> = ({ notes = [] }) => {
  const getNotes = () => ({
    query: NOTES,
  });

  const getUserFavoriteNotes = () => ({
    query: USER_FAVORITE_NOTES,
  });

  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
    refetchQueries: [getNotes(), getUserFavoriteNotes()],
  });

  const { data: userFavoriteNotes } = useQuery<{ user: Notes }>(
    USER_FAVORITE_NOTES
  );

  return (
    <ul className="flex flex-col md:flex-row flex-wrap">
      {notes?.map((note) => (
        <NoteCard
          toggleFavorite={toggleFavorite}
          key={note?.id}
          note={note}
          userNotes={userFavoriteNotes?.user?.notes || []}
        />
      ))}
    </ul>
  );
};

export default NoteList;
