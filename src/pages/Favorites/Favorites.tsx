import React from "react";

import { Notes } from "../../types";
import { useQuery } from "@apollo/client";
import { NoteList } from "../../components/modules";
import { USER_FAVORITE_NOTES } from "../../apollo";

const Favorites: React.FC = () => {
  const { data, loading, error } = useQuery<{ user: Notes }>(
    USER_FAVORITE_NOTES
  );
  return (
    <div>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка</p>}
      {data?.user?.notes?.length === 0 && (
        <p>Вы не добавили ни одной заметки в избранное</p>
      )}
      <NoteList notes={data?.user?.notes || []} />
    </div>
  );
};

export default Favorites;
