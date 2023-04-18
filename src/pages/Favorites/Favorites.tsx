import React from "react";

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { Note } from "../../types";
import { NoteCard } from "../../components/shared";

import { USER_FAVORITE_NOTES } from "../../apollo/";

type FavoritesNotes = {
  userById: {
    favoritesNotes: Note[];
  };
};

const Favorites: React.FC = () => {
  const { id } = useParams();
  const { data } = useQuery<FavoritesNotes>(USER_FAVORITE_NOTES, {
    variables: {
      id: id,
    },
  });
  return (
    <div>
      {data?.userById.favoritesNotes.length === 0 && <p>Вы не добавили ни одной заметки в избранное</p>}
      {data?.userById?.favoritesNotes?.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};

export default Favorites;
