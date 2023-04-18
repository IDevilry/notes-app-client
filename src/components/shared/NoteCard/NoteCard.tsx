import { Note } from "../../../types";

type NoteCardProps = {
  note?: Note;
};

const NoteCard = ({ note = {} }: NoteCardProps) => {
  const {
    addedToFavoriteTimes,
    author,
    content,
    createdAt,
    favoritedBy,
    id,
    title,
    updatedAt,
  } = note;

  const date = new Date(createdAt || "").toLocaleString();

  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>
        Создана {date} {author?.username}
      </p>
      {addedToFavoriteTimes ? (
        <p>Добавлена в избранное: {addedToFavoriteTimes} раз</p>
      ) : (
        <p>Ещё не была добавлена в избранное</p>
      )}
    </div>
  );
};

export default NoteCard;
