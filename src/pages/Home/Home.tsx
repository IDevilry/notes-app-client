import React, { ChangeEventHandler, useMemo, useState } from "react";

import { useDebounce } from "../../hooks/useDebounce";
import { NoteList } from "../../components/modules";
import { Note } from "../../types";
import { ApolloError } from "@apollo/client";
import { Link } from "react-router-dom";
import { Input } from "../../components/shared";

type HomeProps = {
  notes: Note[];
  isLoading?: boolean;
  error?: ApolloError;
};

const Home: React.FC<HomeProps> = ({ notes, isLoading, error }) => {
  const [search, setSearch] = useState("");

  const debouncedFunc = useDebounce(setSearch, 200);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    debouncedFunc(e.target.value);
  };

  const filteredNotes = useMemo(
    () =>
      notes.filter((note) =>
        note.content?.toLowerCase().includes(search.toLowerCase())
      ),
    [search, notes]
  );
  
  return (
    <>
      <Link to="new">Новая заметка</Link>
      {isLoading && <p>Загрузка...</p>}
      {error && <p>Произошла ошибка</p>}
      <div>
        <Input type="search" placeholder="Поиск" onChange={handleChange} />
      </div>
      <NoteList notes={filteredNotes} />
    </>
  );
};

export default Home;
