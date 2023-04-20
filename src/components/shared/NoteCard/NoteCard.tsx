import Like from "../../../assets/like.svg";
import Button from "../Button/Button";

import { Note, Notes } from "../../../types";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_NOTE, NOTES, USER_FAVORITE_NOTES } from "../../../apollo";

type NoteCardProps = {
  note?: Note;
  toggleFavorite: ({}) => void;
};

const NoteCard: React.FC<NoteCardProps> = ({ note = {}, toggleFavorite }) => {
  const { data: userFavoriteNotes } = useQuery<{ user: Notes }>(
    USER_FAVORITE_NOTES
  );
  const [deleteNote] = useMutation(DELETE_NOTE, {
    refetchQueries: [{ query: NOTES }],
  });
  const { addedToFavoriteTimes, author, content, createdAt, id, title } = note;

  const date = new Date(createdAt || "").toLocaleString();
  return (
    <div className="flex flex-col w-[500px] m-5 text-white">
      <div className="p-6 rounded-t-[10px] bg-[#515662]">
        <div className="border-b-[1px] border-gray-500 flex justify-between">
          <p className="font-semibold text-[20px]">{author?.username}</p>
          <Button
            type="button"
            handleClick={() =>
              deleteNote({
                variables: {
                  id: id,
                },
              })
            }
            variant="secondary"
          >
            X
          </Button>
        </div>
        <div className="p-2">
          <div className="flex justify-between items-center">
            <h2 className="text-[18px] font-semibold">{title}</h2>
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
                    id: id,
                  },
                })
              }
              type="button"
              variant="secondary"
            >
              <Like
                fill={
                  userFavoriteNotes?.user.notes?.find((note) => note.id === id)
                    ? "red"
                    : "white"
                }
              />
            </Button>
          }
          <p>{addedToFavoriteTimes ? addedToFavoriteTimes : null}</p>
        </div>
        <div className="">
          <Link
            className="flex items-center py-2 px-4 bg-sky-600 rounded-xl text-white text-[16px]"
            to={`/note/${id}`}
          >
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
