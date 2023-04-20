import { NoteCard } from "../../shared";
import { Note } from "../../../types";
import { NOTES, TOGGLE_FAVORITE, USER_FAVORITE_NOTES } from "../../../apollo";
import { useMutation } from "@apollo/client";

type NoteListProps = {
  note?: Note[];
};

const NoteList: React.FC<NoteListProps> = ({ note = [] }) => {
  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
    refetchQueries: [
      {
        query: NOTES,
      },
      {
        query: USER_FAVORITE_NOTES,
      },
    ],
  });
  return (
    <ul className="flex flex-col md:flex-row flex-wrap">
      {note?.map((note) => (
        <NoteCard toggleFavorite={toggleFavorite} key={note.id} note={note} />
      ))}
    </ul>
  );
};

export default NoteList;
