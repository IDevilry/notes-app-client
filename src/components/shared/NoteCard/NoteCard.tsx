import { NavLink } from "react-router-dom";
import { useMemo } from "react";

import { Note } from "../../../types";

import Like from "../../../assets/like.svg";
import Button from "../Button/Button";
import DeleteNoteButton from "../DeleteNoteButton/DeleteNote";

type toggleParams = {
  variables: { id: string };
};

type NoteCardProps = {
  note?: Note;
  userNotes: Note[];
  toggleFavorite: ({ variables }: toggleParams) => void;
};

const NoteCard: React.FC<NoteCardProps> = ({
  note = {},
  userNotes = [],
  toggleFavorite,
}) => {
  const {
    addedToFavoriteTimes,
    author,
    content,
    createdAt,
    id,
    title,
    category,
  } = note;

  const filteredNotes = useMemo(
    () => userNotes?.find((note) => note.id === id),
    [id, userNotes]
  );

  const date = new Date(createdAt || "").toLocaleString();

  return (
    <div className="flex flex-col w-[500px] m-5 text-white">
      <div className="p-6 rounded-t-[10px] bg-[#515662]">
        <div className="border-b-[1px] border-gray-500 flex justify-between">
          <p className="font-semibold text-[20px]">{author?.username}</p>
          <DeleteNoteButton id={id || ""} />
        </div>
        <div className="p-2">
          <div className="flex justify-between items-center">
            <h2 className="text-[18px] font-semibold">
              {title}, {category}
            </h2>
            <p className="font-medium text-[15px]">{date}</p>
          </div>
          <p className="pt-1 text-[16px] font-medium">{content}</p>
        </div>
      </div>
      <div className="flex items-center justify-between bg-[#40434e] p-4 rounded-b-[10px]">
        <div className="flex items-center gap-2">
          {
            <Button
              handleClick={() =>
                toggleFavorite({
                  variables: {
                    id: id || "",
                  },
                })
              }
              type="button"
              variant="secondary"
            >
              <Like fill={filteredNotes ? "red" : "white"} />
            </Button>
          }
          <p>{addedToFavoriteTimes ? addedToFavoriteTimes : null}</p>
        </div>
        <div className="">
          <NavLink
            className="flex items-center py-2 px-4 bg-sky-600 rounded-xl text-white text-[16px]"
            to={`/note/${id}`}
          >
            Подробнее
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
