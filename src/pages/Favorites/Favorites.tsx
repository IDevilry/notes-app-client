import React from "react";

import { Note } from "../../types";
import { ApolloError } from "@apollo/client";
import { NoteList } from "../../components/modules";

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
      <NoteList note={notes} />
    </div>
  );
};

export default Favorites;
