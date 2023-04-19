import { Note } from "../../../types";

import Like from "../../../assets/like.svg";

type NoteCardProps = {
  note?: Note;
  userFavoriteNotes?: Note[];
};

const NoteCard = ({ note = {}, userFavoriteNotes }: NoteCardProps) => {
  const { addedToFavoriteTimes, author, content, createdAt, id, title } = note;

  const date = new Date(createdAt || "").toLocaleString();

  return (
    <div className="flex flex-col m-5 text-white">
      <div className="p-5 rounded-t-[10px] bg-[#515662]">
        <div className="border-b-[1px] border-gray-500">
          <p className="font-semibold text-[20px]">{author?.username}</p>
        </div>
        <div className="p-2">
          <div className="flex justify-between items-center">
            <h2 className="text-[18px] font-semibold">{title}</h2>
            <p className="font-medium text-[15px]">{date}</p>
          </div>
          <p className="pt-1 text-[16px] font-medium">{content}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 bg-[#40434e] p-3 rounded-b-[10px]">
        {
          <Like
            fill={
              userFavoriteNotes?.find((note) => note.id === id)
                ? "red"
                : "white"
            }
          />
        }
        <p>{addedToFavoriteTimes ? addedToFavoriteTimes : null}</p>
      </div>
    </div>
  );
};

export default NoteCard;
