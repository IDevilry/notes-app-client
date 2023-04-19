import React from "react";

import { NoteCard } from "../../components/shared";
import { Note } from "../../types";
import { ApolloError } from "@apollo/client";

type FavoritesProps = {
  notes?: Note[];
  loading?: boolean;
  error?: ApolloError;
};

const Favorites: React.FC<FavoritesProps> = ({ notes, loading, error }) => {
  return (
    <div>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка</p>}
      {notes?.length === 0 && (
        <p>Вы не добавили ни одной заметки в избранное</p>
      )}
      {notes?.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};

export default Favorites;
